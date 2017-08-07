(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-snackbar-example');
  var showSnackbarButton = document.querySelector('#demo-show-snackbar');
  showSnackbarButton.addEventListener('click', function() {
    'use strict';
    var data = {
      message: 'Button color changed.',
      timeout: 2000,
      actionText: 'Undo'
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());