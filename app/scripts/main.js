'use strict';

(function(api, $) {

	var dom = {},

		// userData = {},

		githubApi = {
			base: 'https://api.github.com/'
		},

		repos = [],

		setupDom = function() {

			dom.document = $(document);
			dom.nav = $('nav');
			dom.projectMenu = dom.nav.find('.project-menu');
			dom.avatarImg = $('.avatar img');

		},

		setupFoundation = function() {

			dom.document.foundation();

		},

		injectProjectsToMenu = function(repo, cnt, projects) {

			cnt = cnt || 0;
			projects = projects || [];
			repo = repo || repos[cnt];
			cnt++;

			projects.push('<li><a href="' + repo.html_url + '">' + repo.name + '</a></li>');

			if (cnt === repos.length) {

				// Only hit the dom once.
				dom.projectMenu.append(projects.join(''));

			} else {

				injectProjectsToMenu(repos[cnt], cnt, projects);

			}

		},

		/*getUserData = function() {

			$.getJSON(githubApi.base, {
				users: 'edull24'
			})
			.done(function(data) {

				userData = data;
				console.log( userData );
				setupProjectMenu();

			});

		},*/

		getRepos = function(page) {

			var url = githubApi.base + 'users/edull24/repos?callback=?';

			page = page || 1;

			$.getJSON(url, {
				per_page: 100,
				page: page
			}).done(function(response) {

				if (response.data && response.data.length) {

					// Save the repos and request the next batch.

					repos = repos.concat(response.data);
					getRepos(page + 1);

				} else {

					// All repos have been fetched, wait for the dom
					// to be ready and then add dynamic content.

					console.log( 'repos: ', repos );

					if (!repos.length) {

						// We have no repos.
						return;

					}

					$(function() {

						injectProjectsToMenu();

						$.each(repos, function(i, repo) {

							

						});

					});

				}

			});

		},

		init = function() {

			setupDom();

			setupFoundation();

		};

	$(init);

	// Start fetching the repo data.
	getRepos();

	api.getDom = function(){return dom;};
	api.getRepos = function() {return repos;};

})(window.app = window.app || {}, jQuery);