exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{
      _id:'1', 
      title: 'First Post', 
      content: 'This is the first post!',
      imageUrl:'https://www.bing.com/images/search?view=detailV2&ccid=IOJEG0ma&id=06BC5B94C70407F9524A20CFC8E7F727069B84F9&thid=OIP.IOJEG0mazdIzx1U7IHtDGQHaE8&mediaurl=https%3a%2f%2fi0.wp.com%2fnypost.com%2fwp-content%2fuploads%2fsites%2f2%2f2017%2f06%2fduck.jpg%3fquality%3d90%26strip%3dall%26ssl%3d1&exph=2000&expw=3000&q=duck&simid=608047385426206766&FORM=IRPRST&ck=047E13799E1288302373B3953957144D&selectedIndex=1',
      creator:{
        name:'Sahil'
      },
      createdAt:new Date() }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content,
      creator:{name:'Sahil'},createdAt:new Date() }
  });
};
