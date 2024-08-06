export const sendEmail = async (formData) => {
    try {
        const response = await fetch('https://portfolio-backend-tawny-theta.vercel.app/send-email', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData: formData })
        });

        const responseData = await response.json();
        return responseData.message;
    } catch (error) {
        console.error('Error sending message:', error.message);
    }
}