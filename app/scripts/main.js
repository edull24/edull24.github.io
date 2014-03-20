'use strict';

(function(api, $) {

	var dom = {},

		userData = {},

		githubApi = {
			base: 'https://api.github.com/'
		},

		repos = [],

		setupDom = function() {

			dom.document = $(document);
			dom.nav = $('nav');
			dom.projectMenu = dom.nav.find('.project-menu');
			dom.avatarImg = $('#avatar');
			dom.numbersRow = $('#numbers');
			dom.numberListItems = dom.numbersRow.find('li');
			dom.reposRow = $('#repos');
			dom.reposList = dom.reposRow.find('ul');

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

		getUserData = function() {

			var url = githubApi.base + 'users/edull24';

			$.getJSON(url).done(function(data) {

				userData = data;
				console.log( userData );

				$(function() {

					dom.numberListItems.each(function(i) {

						var $val = dom.numberListItems.eq(i).find(':last-child');

						$val.html(userData[$val.data('api-key')]);

					});

					dom.numbersRow.removeClass('no-opacity');

				});

			});

		},

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

						var repoListItems = '';

						injectProjectsToMenu();

						$.each(repos, function(i, repo) {

							repoListItems += '<li class="">' +
								'<a href="' + repo.html_url + '">' +
								'<h2>' + repo.name + '</h2>' +
								'<h3>' + (repo.language || '') + '</h3>' +
								'<p>' + (repo.description || '') + '</p>' +
								'</a></li>';

						});

						dom.reposList.append(repoListItems);

					});

				}

			});

		},

		init = function() {

			setupDom();

			setupFoundation();

		};

	// Make sure init() is registered as the first domready callback.
	$(init);

	// Start fetching data.
	getUserData();
	getRepos();

	// Debug
	api.getDom = function(){return dom;};
	api.getRepos = function() {return repos;};
	api.getUser= function() {return userData;};

})(window.app = window.app || {}, jQuery);