const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function handleSubmit(req, res) {
  console.log("Form data", req.body)
  const { name, email, phone, rating, feedback } = req.body;

  try {
    const feedbackData = await prisma.feedback.create({
      data: {
         name, email, phone, rating, feedback 
        },
    });
    console.log("Feedback data", feedbackData);

    res.status(201).json(feedbackData);
  } catch (error) {
    res.status(500).json({ error: "Failed to create feedback to db" });
  }
}

async function getForms(req, res) {
  try {
    const feedbackList = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(feedbackList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
}

module.exports = { handleSubmit, getForms };
