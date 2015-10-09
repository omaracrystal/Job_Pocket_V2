//directive 1 search
app.directive("login", function() {
  return {
    retrict: 'AECM',
    templateUrl: '../views/login.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("register", function() {
  return {
    retrict: 'AECM',
    templateUrl: '../views/register.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("searchOptions", function() {
  return {
    retrict: 'AECM',
    templateUrl: './views/searchOptions.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("lists", function() {
  return {
    retrict: 'AECM',
    templateUrl: './views/lists.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("myList", function() {
  return {
    retrict: 'AECM',
    templateUrl: './views/myList.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("recommended", function() {
  return {
    retrict: 'AECM',
    templateUrl: './views/recommended.html',
    replace: false,
    scope: {

  }
  };
});
