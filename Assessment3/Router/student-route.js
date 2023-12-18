//2. Configure a route name - Student

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Student Route!');
});

//4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string
router.get('/getStudentDetails', async (req, res) => {
    const { name, age, address, session } = req.query;
  
    const studentDetails = {
      name,
      age: parseInt(age),
      address,
      session,
    };
    await saveStudentInfoToFile(studentDetails);
  
    res.json({ studentDetails });
})


//5. Save this information received in #4  to a file named studentIfo using fs module async way
const saveStudentInfoToFile = async (studentDetails) => {
    const filePath = path.join(__dirname, '../studentInfo.json')
  
    try {
      const existingData = await fs.readFile(filePath, 'utf8')
      const parsedData = existingData ? JSON.parse(existingData) : []
      
      parsedData.push(studentDetails)
  
      await fs.writeFile(filePath, JSON.stringify(parsedData, null, 2), 'utf8')
  
      console.log('Student information saved to studentInfo.json')
    } catch (error) {
      console.error('Error saving student information:', error.message)
    }
}
module.exports = router;