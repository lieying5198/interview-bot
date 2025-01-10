const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const interviewAnswers = {
  "你的优势是什么": "我具有很强的适应能力和学习能力。我能够快速掌握新技能,并且善于在团队中合作。",
  "为什么我们要雇佣你": "我带来积极的工作态度和强烈的责任心。我相信我能为团队带来价值,并且我有持续学习和进步的决心。",
  "你的缺点是什么": "我有时会过分关注细节,这可能会影响工作效率。但我正在努力改进,学会在细节和效率之间找到平衡。",
  "你对加班怎么看": "我理解有时工作需要加班,我会合理安排时间,确保按时完成任务。同时也会注意工作效率,避免不必要的加班。",
  "你的职业规划是什么": "短期内,我希望在这个岗位上积累经验,提升专业能力。长期来看,我希望能够承担更多责任,为公司创造更大价值。"
};

app.post('/api/reply', (req, res) => {
  const { question } = req.body;
  
  // 简单的模糊匹配逻辑
  const matchedQuestion = Object.keys(interviewAnswers).find(key => 
    question.includes(key) || key.includes(question)
  );
  
  const reply = matchedQuestion 
    ? interviewAnswers[matchedQuestion]
    : "抱歉,我还没有这个问题的答案。但我会继续学习,提供更好的服务。";
    
  res.json({ reply });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 