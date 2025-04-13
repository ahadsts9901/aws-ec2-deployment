import express from "express"

const app = express()

app.use("/", (req, res) => res.send("hello from elasticbean stalk"))

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
