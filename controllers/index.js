/* CONTROLLERS SECTION */
module.exports.displayHome = (res) =>
{
  res.render('index', 
    { 
      title: 'Home'
    });
}

module.exports.displayAbout = (res) =>
{
  res.render('index',
  {
    title: 'About'
  });
}

module.exports.displayContact = (res) =>
{
  res.render('index',
  {
    title: 'Contact'
  });
}

module.exports.displayProjects = (res) =>
{
  res.render('index',
  {
    title: 'Projects'
  });
}

module.exports.displayServices = (res) =>
{
  res.render('index',
  {
    title: 'Services'
  });
}
