kettu.MultipleTorrentsView = function(torrents, context, downloadDir) {
  var view = torrents;
  
  view.torrents = torrents;
  view.downloadDir = downloadDir;
  
  view.loadLocations = function() {
      view.showLocations = false;

      if (_.isArray(kettu.config.locations) && kettu.config.locations.length > 0) {
        view.locations = [];

        _.each(kettu.config.locations, function(location) {
            view.locations.push(location);
        });
		
		if(view.locations.length == 0) {
			view.locations = [{name: 'Default', path: (kettu.app.settings || {})['download-dir']}];
		}

        view.showLocations = true;
      }
  };

  view.loadLocations();

  return view;
};
