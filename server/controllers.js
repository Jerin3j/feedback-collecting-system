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
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;
  const order = req.query.order === 'asc' ? 'asc' : 'desc';
  
  
  try {
    const [feedbackList, totalCount] = await Promise.all([
      prisma.feedback.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: order },
      }),
      prisma.feedback.count(),
    ]);
    console.log("Page:", page, "Skip:", skip, "Data:", feedbackList.length);

    res.json({ feedbacks: feedbackList, totalCount }); 
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedback", details: error.message });
  }
}


module.exports = { handleSubmit, getForms };
