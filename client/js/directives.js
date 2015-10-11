//directive 1 search
app.directive("login", function() {
  return {
    retrict: 'AECM',
    templateUrl: '../partials/login.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("register", function() {
  return {
    retrict: 'AECM',
    templateUrl: '../partials/register.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("searchOptions", function() {
  return {
    retrict: 'AECM',
    templateUrl: './partials/searchOptions.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("lists", function() {
  return {
    retrict: 'AECM',
    templateUrl: './partials/lists.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("myList", function() {
  return {
    retrict: 'AECM',
    templateUrl: './partials/myList.html',
    replace: false,
    scope: {

  }
  };
});

app.directive("recommended", function() {
  return {
    retrict: 'AECM',
    templateUrl: './partials/recommended.html',
    replace: false,
    scope: {

  }
  };
});
