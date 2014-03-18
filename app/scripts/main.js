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

		},

		setupFoundation = function() {

			dom.document.foundation();

		},

		addProjectsToMenu = function(repo, cnt, projects) {

			var repoLen = repos.length;

			if (!repoLen) {

				// We have no repos.
				return;

			}

			cnt = cnt || 0;
			projects = projects || [];
			repo = repo || repos[cnt];
			cnt++;

			projects.push('<li><a href="' + repo.html_url + '">' + repo.name + '</a></li>');

			if (cnt === repoLen) {

				// Only hit the dom once.
				dom.projectMenu.append(projects.join(''));

			} else {

				addProjectsToMenu(repos[cnt], cnt, projects);

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

					$(function() {

						addProjectsToMenu();

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

})(window.app = window.app || {}, jQuery);