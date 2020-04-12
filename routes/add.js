const {Router} = require('express');
const Courses = require('../models/course');
const router = Router();

router.get('/', (req, res) => {
    res.render('addCourse', {
        title: "Add",
        isAdd: true
    });
});

router.post('/', async (req, res) => {
    const courses = new Courses(req.body.title, req.body.price, req.body.img);
    await courses.save();

    res.redirect('/courses');
});

module.exports = router;