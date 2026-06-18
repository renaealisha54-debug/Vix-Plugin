const express = require('express');
const app = express();
const PORT = 3000;

// 1. Core Plugin Logic
const VixPlugin = {
  getMeaningOfLife: function() {
    return `<h1>Vix Plugin</h1>
    <p><strong>Vix:</strong> A question that has puzzled humans for centuries. While there may not be a definitive answer, many theories attempt to explain the purpose of life. Here are a few:</p>
    <ol>
      <li><strong>Hedonic Theory</strong>: This perspective, inspired by Epicurus, suggests that the meaning of life is to seek happiness and fulfillment through the pursuit of pleasure and the avoidance of pain.</li>
      <li><strong>Existentialism</strong>: This philosophy, popularized by Jean-Paul Sartre, asserts that life has no inherent meaning; instead, individuals must create their own purpose and significance.</li>
      <li><strong>Humanism</strong>: This view posits that the meaning of life is to strive for personal growth, creativity, and self-actualization, fostering a sense of connection and belonging with others.</li>
      <li><strong>Spirituality</strong>: For many, the meaning of life is rooted in spiritual beliefs, whether tied to a specific faith, a higher power, or a sense of connection to a universal force.</li>
      <li><strong>Utilitarianism</strong>: This perspective focuses on maximizing overall happiness and well-being, often through selfless acts and contributions to the greater good.</li>
      <li><strong>Personal fulfillment</strong>: For some, the meaning of life is found in achieving personal goals, pursuing passions, and realizing one's potential.</li>
    </ol>
    <p>Ultimately, the meaning of life is a deeply personal and subjective question, with no one-size-fits-all answer. It's a dynamic and evolving concept that can change over time as individuals grow, learn, and experience new perspectives.</p>
    <p><em>Which of these perspectives resonates with you, or do you have a different understanding of the meaning of life?</em></p>`;
  }
};

// 2. Serve the Web Page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vix Plugin Web Interface</title>
      <style>
        body { font-family: sans-serif; line-height: 1.6; padding: 20px; max-width: 600px; margin: 0 auto; background: #f4f4f9; color: #333; }
        h1 { color: #2c3e50; }
        li { margin-bottom: 10px; }
      </style>
    </head>
    <body>
      ${VixPlugin.getMeaningOfLife()}
    </body>
    </html>
  `);
});

// 3. Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 Vix Web Page is live!`);
  console.log(`👉 View it on your phone browser at: http://localhost:${PORT}\n`);
});
