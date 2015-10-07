//directive 1 search
app.directive("login", function() {
  return {
    retrict: 'AECM',
    templateUrl: './views/login.html',
    replace: true,
    scope: {

  }
  }
})

app.directive("searchOptions", function() {
  return {
    retrict: 'AECM',
    templateUrl: './views/searchOptions.html',
    replace: true,
    scope: {

  }
  }
})

app.directive("lists", function() {
  return {
    retrict: 'AECM',
    templateUrl: './views/lists.html',
    replace: true,
    scope: {

  }
  }
})

// app.directive("mylist", function() {
//   return {
//     retrict: 'AECM',
//     templateUrl: './views/mylist.html',
//     replace: true,
//     scope: {

//   }
//   }
// })
