define(
[
	'jquery',
	'templates'
],
function($, templates) {

	'use strict';

	var api = {},

		dom = {},

		userData = {},

		githubApi = {
			base: 'https://api.github.com/',
			user: 'edull24'
		},

		repos = [],

		setupDom = function() {

			dom.document = $(document);
			dom.nav = $('nav');
			dom.topBarSection = dom.nav.find('.top-bar-section');
			dom.projectMenu = dom.nav.find('.project-menu');
			dom.avatarImg = $('#avatar');
			dom.numbersRow = $('#numbers');
			dom.numberList = dom.numbersRow.find('ul');
			dom.reposRow = $('#repos');
			dom.reposList = dom.reposRow.find('ul');

		},

		getUserData = function() {

			var url = githubApi.base + 'users/' + githubApi.user;

			return $.getJSON(url).done(function(response) {

				userData = response;

			});

		},

		processUserData = function() {

			// User data has been fetched, wait for the dom (and our
			// cached variables) to be ready and then add dynamic content.

			$(function() {

				dom.numberList.html(templates.numberItems(userData));

			});

		},

		handleNoUserData = function() {

			// Wait for the dom (and our cached variables) to be ready and
			// then handle the failure.

			$(function() {

				var $alertTarget = dom.numberList.closest('.column');

				dom.numberList.closest('.panel').remove();

				injectAlert({
					$target: $alertTarget,
					failure: true,
					msg: ''
				});

			});

		},

		getRepos = function() {

			var url = githubApi.base + 'users/' + githubApi.user + '/repos',
				dfd = $.Deferred();

			$.getJSON(url)
				.done(function(response) {

					repos = response;

					dfd.resolve();

				})
				.fail(function() {

					// Trigger a handleNoRepos() call indicating a
					// failure occured (not a successful request that
					// returned 0 repos).
					dfd.reject(true);

				});

			return dfd.promise();

		},

		processRepoData = function() {

			// All repos have been fetched, wait for the dom (and our
			// cached variables) to be ready and then add dynamic content.

			$(function() {

				if (repos.length) {

					injectRepoData();

				} else {

					// The data request was successful, but we have
					// no repos in github.

					handleNoRepos();

				}

				show(dom.topBarSection);

			});

		},

		injectRepoData = function() {

			var projectItems = '',
				repoItems = '';

			$.each(repos, function(i, repo) {

				projectItems += templates.projectMenuItem(repo);
				repoItems += templates.repoItem(repo);

			});

			dom.projectMenu.append(projectItems);
			dom.reposList.html(repoItems);

		},

		injectAlert = function(args) {

			args.$target.append(templates.alert({

				failure: !!args.failure,
				msg: args.msg
			
			}));

			initFoundation();

			rotateFrown(args.$target);

		},

		handleNoRepos = function(requestFailure) {

			// Wait for the dom (and our cached variables) to be ready and
			// then handle the failure.

			$(function() {

				var $alertTarget = dom.reposList.closest('.column');

				dom.topBarSection.remove();
				dom.reposList.remove();

				injectAlert({
					$target: $alertTarget,
					failure: requestFailure,
					msg: 'You better get your game up and add some repos son!'
				});

			});

		},

		rotateFrown = function($target) {

			// Hack to get transition delay to work.
			setTimeout(function(){

				$target
					.find('.frown')
						.addClass('rotate');

			}, 0);

		},

		showDataRows = function() {

			show(dom.numbersRow);
			show(dom.reposRow);

		},

		show = function($target) {

			$target.removeClass('no-opacity');

		},

		initFoundation = function(args) {

			args = args || {};

			args.$target = args.$target || dom.document;

			args.options = args.options || {};

			args.$target.foundation(args.options);

		};

	api.init = function() {

		console.log('app.js init...');

		$(function() {

			setupDom();

			initFoundation();

		});

		// Start fetching data.
		// We'll wait for the dom to be ready before we actually process the data.
		
		$.when(

			getUserData()
				.done(processUserData)
				.fail(handleNoUserData),

			getRepos()
				.done(processRepoData)
				.fail(handleNoRepos)

		).always(showDataRows);

	};

	// Debug
	api.getDom = function(){return dom;};
	api.getRepos = function() {return repos;};
	api.getUser= function() {return userData;};

	return api;

});