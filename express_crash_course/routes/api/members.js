const express = require("express");
const uuid = require("uuid"); // used to generate random IDs, DB's will automatically generate ID's
const members = require("../../Members");
const router = express.Router();

// this route gets all members
router.get("/", (req, res) => {
  res.json(members);
});

// get single member
router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id)); // check to see if its true / false

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id))); // req/params.id is a string so we need to parse it to an int
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };
  // make sure name and email are sent
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "please include a name and email" }); // bad request, user should be sending email and name
  }

  members.push(newMember); // add members , for pushing to a DB it will be different
  // res.json(members); // redirects to json file
  res.redirect('/'); // redirects to the same page
});

// update member
router.put("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id)); // check to see if its true / false

  if (found) {
    const updMember = req.body;
    members.forEach(member => {
      // loop through each member
      if (member.id === parseInt(req.params.id)) {
        // grab id
        member.name = updMember.name ? updMember.name : member.name; // send name to update depending if a new name was entered
        member.email = updMember.email ? updMember.email : member.email; // send email to update depending if a new email was entered
        res.json({ msg: "member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// delete single member
router.delete("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id)); // check to see if its true / false

  if (found) {
    res.json({
      msg: "member deleted",
      members: members.filter(member => member.id !== parseInt(req.params.id))
    }); // req/params.id is a string so we need to parse it to an int
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
