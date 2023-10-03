// // const job = require("../models/jobDesc")
// const faqs = require("../models/Faqs");

// const allFaqs = async (req, res)=>{
//     const {
//         faqsQues, faqsAns
//     } = req.query;
//     const queryObject = {};
//     console.log(queryObject)
//     const faq = await faqs.find(queryObject)
//     res.status(200).json({
//         faq,
//         msg: "i am get tested"
//     })
// };

// module.exports = {
//     allFaqs,
// }




// // const allJob = async (req, res) => {
// //     const {
// //         jobName,
// //         location,
// //         duration
// //     } = req.query;
// //     const queryObject = {};
// //     if (jobName) {
// //         queryObject.jobName = {
// //             $regex: jobName,
// //             $options: "i"
// //         };
// //     };
// //     if (location) {
// //         queryObject.location = {
// //             $regex: location,
// //             $options: "i"
// //         };
// //     };
// //     if (duration) {
// //         queryObject.duration = {
// //             $regex: duration,
// //             $options: "i"
// //         };
// //     };
// //     console.log(queryObject)
// //     const mydata = await job.find(queryObject)
// //     res.status(200).json({
// //         mydata
// //     })
// // }
// // const allJobtesting = async (req, res) => {
// //     res.status(200).json({
// //         msg: "i am get tested"
// //     })
// // }

// // module.exports = {
// //     allJob,
// //     allJobtesting
// // }