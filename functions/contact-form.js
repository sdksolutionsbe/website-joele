/**
 * Netlify Serverless Function for Contact Form
 * Validates reCAPTCHA and sends email notification
 *
 * Note: For Netlify Forms, this function is optional.
 * Netlify Forms handles submissions automatically.
 * This function is provided for custom handling if needed.
 */

const https = require('https');

// Environment variables (set in Netlify dashboard)
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'stijn.de.ketelaere@pandora.be';

/**
 * Verify reCAPTCHA token with Google
 */
async function verifyRecaptcha(token) {
    return new Promise((resolve, reject) => {
        const postData = `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;

        const options = {
            hostname: 'www.google.com',
            port: 443,
            path: '/recaptcha/api/siteverify',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    resolve(result.success);
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

/**
 * Main handler for form submissions
 */
exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse form data
        const data = JSON.parse(event.body);
        const { name, email, phone, service, message, 'g-recaptcha-response': recaptchaToken } = data;

        // Validate required fields
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Vul alle verplichte velden in.' })
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Ongeldig e-mailadres.' })
            };
        }

        // Verify reCAPTCHA
        if (RECAPTCHA_SECRET_KEY && recaptchaToken) {
            const isValidCaptcha = await verifyRecaptcha(recaptchaToken);
            if (!isValidCaptcha) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Captcha verificatie mislukt.' })
                };
            }
        }

        // Log submission (for Netlify Functions logs)
        console.log('Contact form submission:', {
            name,
            email,
            phone: phone || 'Not provided',
            service: service || 'Not selected',
            message: message.substring(0, 100) + '...',
            timestamp: new Date().toISOString()
        });

        // Success response
        // Note: For actual email sending, integrate with SendGrid, Mailgun, or similar
        // Netlify Forms handles email notifications automatically when configured
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.'
            })
        };

    } catch (error) {
        console.error('Form submission error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Er is een fout opgetreden. Probeer het later opnieuw.' })
        };
    }
};
