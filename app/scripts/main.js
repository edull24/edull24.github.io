'use strict';

(function(api, $) {

	var dom = {},

		userData = {},

		githubApi = {
			base: 'https://api.github.com/'
		},

		repos = [],// = [{"id":11535753,"name":"backbone-library","full_name":"edull24/backbone-library","owner":{"login":"edull24","id":2624149,"avatar_url":"https://avatars.githubusercontent.com/u/2624149?","gravatar_id":"dcded3f8e523a02b2f2ecb6be8b4e2dd","url":"https://api.github.com/users/edull24","html_url":"https://github.com/edull24","followers_url":"https://api.github.com/users/edull24/followers","following_url":"https://api.github.com/users/edull24/following{/other_user}","gists_url":"https://api.github.com/users/edull24/gists{/gist_id}","starred_url":"https://api.github.com/users/edull24/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/edull24/subscriptions","organizations_url":"https://api.github.com/users/edull24/orgs","repos_url":"https://api.github.com/users/edull24/repos","events_url":"https://api.github.com/users/edull24/events{/privacy}","received_events_url":"https://api.github.com/users/edull24/received_events","type":"User","site_admin":false},"private":false,"html_url":"https://github.com/edull24/backbone-library","description":null,"fork":false,"url":"https://api.github.com/repos/edull24/backbone-library","forks_url":"https://api.github.com/repos/edull24/backbone-library/forks","keys_url":"https://api.github.com/repos/edull24/backbone-library/keys{/key_id}","collaborators_url":"https://api.github.com/repos/edull24/backbone-library/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/edull24/backbone-library/teams","hooks_url":"https://api.github.com/repos/edull24/backbone-library/hooks","issue_events_url":"https://api.github.com/repos/edull24/backbone-library/issues/events{/number}","events_url":"https://api.github.com/repos/edull24/backbone-library/events","assignees_url":"https://api.github.com/repos/edull24/backbone-library/assignees{/user}","branches_url":"https://api.github.com/repos/edull24/backbone-library/branches{/branch}","tags_url":"https://api.github.com/repos/edull24/backbone-library/tags","blobs_url":"https://api.github.com/repos/edull24/backbone-library/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/edull24/backbone-library/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/edull24/backbone-library/git/refs{/sha}","trees_url":"https://api.github.com/repos/edull24/backbone-library/git/trees{/sha}","statuses_url":"https://api.github.com/repos/edull24/backbone-library/statuses/{sha}","languages_url":"https://api.github.com/repos/edull24/backbone-library/languages","stargazers_url":"https://api.github.com/repos/edull24/backbone-library/stargazers","contributors_url":"https://api.github.com/repos/edull24/backbone-library/contributors","subscribers_url":"https://api.github.com/repos/edull24/backbone-library/subscribers","subscription_url":"https://api.github.com/repos/edull24/backbone-library/subscription","commits_url":"https://api.github.com/repos/edull24/backbone-library/commits{/sha}","git_commits_url":"https://api.github.com/repos/edull24/backbone-library/git/commits{/sha}","comments_url":"https://api.github.com/repos/edull24/backbone-library/comments{/number}","issue_comment_url":"https://api.github.com/repos/edull24/backbone-library/issues/comments/{number}","contents_url":"https://api.github.com/repos/edull24/backbone-library/contents/{+path}","compare_url":"https://api.github.com/repos/edull24/backbone-library/compare/{base}...{head}","merges_url":"https://api.github.com/repos/edull24/backbone-library/merges","archive_url":"https://api.github.com/repos/edull24/backbone-library/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/edull24/backbone-library/downloads","issues_url":"https://api.github.com/repos/edull24/backbone-library/issues{/number}","pulls_url":"https://api.github.com/repos/edull24/backbone-library/pulls{/number}","milestones_url":"https://api.github.com/repos/edull24/backbone-library/milestones{/number}","notifications_url":"https://api.github.com/repos/edull24/backbone-library/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/edull24/backbone-library/labels{/name}","releases_url":"https://api.github.com/repos/edull24/backbone-library/releases{/id}","created_at":"2013-07-19T19:42:51Z","updated_at":"2014-01-18T05:07:48Z","pushed_at":"2013-07-19T20:04:38Z","git_url":"git://github.com/edull24/backbone-library.git","ssh_url":"git@github.com:edull24/backbone-library.git","clone_url":"https://github.com/edull24/backbone-library.git","svn_url":"https://github.com/edull24/backbone-library","homepage":null,"size":104,"stargazers_count":0,"watchers_count":0,"language":null,"has_issues":true,"has_downloads":true,"has_wiki":true,"forks_count":0,"mirror_url":null,"open_issues_count":0,"forks":0,"open_issues":0,"watchers":0,"default_branch":"master","master_branch":"master"},{"id":11486561,"name":"backbone-todo","full_name":"edull24/backbone-todo","owner":{"login":"edull24","id":2624149,"avatar_url":"https://avatars.githubusercontent.com/u/2624149?","gravatar_id":"dcded3f8e523a02b2f2ecb6be8b4e2dd","url":"https://api.github.com/users/edull24","html_url":"https://github.com/edull24","followers_url":"https://api.github.com/users/edull24/followers","following_url":"https://api.github.com/users/edull24/following{/other_user}","gists_url":"https://api.github.com/users/edull24/gists{/gist_id}","starred_url":"https://api.github.com/users/edull24/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/edull24/subscriptions","organizations_url":"https://api.github.com/users/edull24/orgs","repos_url":"https://api.github.com/users/edull24/repos","events_url":"https://api.github.com/users/edull24/events{/privacy}","received_events_url":"https://api.github.com/users/edull24/received_events","type":"User","site_admin":false},"private":false,"html_url":"https://github.com/edull24/backbone-todo","description":"","fork":false,"url":"https://api.github.com/repos/edull24/backbone-todo","forks_url":"https://api.github.com/repos/edull24/backbone-todo/forks","keys_url":"https://api.github.com/repos/edull24/backbone-todo/keys{/key_id}","collaborators_url":"https://api.github.com/repos/edull24/backbone-todo/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/edull24/backbone-todo/teams","hooks_url":"https://api.github.com/repos/edull24/backbone-todo/hooks","issue_events_url":"https://api.github.com/repos/edull24/backbone-todo/issues/events{/number}","events_url":"https://api.github.com/repos/edull24/backbone-todo/events","assignees_url":"https://api.github.com/repos/edull24/backbone-todo/assignees{/user}","branches_url":"https://api.github.com/repos/edull24/backbone-todo/branches{/branch}","tags_url":"https://api.github.com/repos/edull24/backbone-todo/tags","blobs_url":"https://api.github.com/repos/edull24/backbone-todo/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/edull24/backbone-todo/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/edull24/backbone-todo/git/refs{/sha}","trees_url":"https://api.github.com/repos/edull24/backbone-todo/git/trees{/sha}","statuses_url":"https://api.github.com/repos/edull24/backbone-todo/statuses/{sha}","languages_url":"https://api.github.com/repos/edull24/backbone-todo/languages","stargazers_url":"https://api.github.com/repos/edull24/backbone-todo/stargazers","contributors_url":"https://api.github.com/repos/edull24/backbone-todo/contributors","subscribers_url":"https://api.github.com/repos/edull24/backbone-todo/subscribers","subscription_url":"https://api.github.com/repos/edull24/backbone-todo/subscription","commits_url":"https://api.github.com/repos/edull24/backbone-todo/commits{/sha}","git_commits_url":"https://api.github.com/repos/edull24/backbone-todo/git/commits{/sha}","comments_url":"https://api.github.com/repos/edull24/backbone-todo/comments{/number}","issue_comment_url":"https://api.github.com/repos/edull24/backbone-todo/issues/comments/{number}","contents_url":"https://api.github.com/repos/edull24/backbone-todo/contents/{+path}","compare_url":"https://api.github.com/repos/edull24/backbone-todo/compare/{base}...{head}","merges_url":"https://api.github.com/repos/edull24/backbone-todo/merges","archive_url":"https://api.github.com/repos/edull24/backbone-todo/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/edull24/backbone-todo/downloads","issues_url":"https://api.github.com/repos/edull24/backbone-todo/issues{/number}","pulls_url":"https://api.github.com/repos/edull24/backbone-todo/pulls{/number}","milestones_url":"https://api.github.com/repos/edull24/backbone-todo/milestones{/number}","notifications_url":"https://api.github.com/repos/edull24/backbone-todo/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/edull24/backbone-todo/labels{/name}","releases_url":"https://api.github.com/repos/edull24/backbone-todo/releases{/id}","created_at":"2013-07-17T20:18:52Z","updated_at":"2014-02-22T10:48:18Z","pushed_at":"2013-07-19T19:42:19Z","git_url":"git://github.com/edull24/backbone-todo.git","ssh_url":"git@github.com:edull24/backbone-todo.git","clone_url":"https://github.com/edull24/backbone-todo.git","svn_url":"https://github.com/edull24/backbone-todo","homepage":null,"size":168,"stargazers_count":0,"watchers_count":0,"language":"JavaScript","has_issues":true,"has_downloads":true,"has_wiki":true,"forks_count":0,"mirror_url":null,"open_issues_count":0,"forks":0,"open_issues":0,"watchers":0,"default_branch":"master","master_branch":"master"},{"id":17805214,"name":"edull24.github.io","full_name":"edull24/edull24.github.io","owner":{"login":"edull24","id":2624149,"avatar_url":"https://avatars.githubusercontent.com/u/2624149?","gravatar_id":"dcded3f8e523a02b2f2ecb6be8b4e2dd","url":"https://api.github.com/users/edull24","html_url":"https://github.com/edull24","followers_url":"https://api.github.com/users/edull24/followers","following_url":"https://api.github.com/users/edull24/following{/other_user}","gists_url":"https://api.github.com/users/edull24/gists{/gist_id}","starred_url":"https://api.github.com/users/edull24/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/edull24/subscriptions","organizations_url":"https://api.github.com/users/edull24/orgs","repos_url":"https://api.github.com/users/edull24/repos","events_url":"https://api.github.com/users/edull24/events{/privacy}","received_events_url":"https://api.github.com/users/edull24/received_events","type":"User","site_admin":false},"private":false,"html_url":"https://github.com/edull24/edull24.github.io","description":"Github dashboard and playground","fork":false,"url":"https://api.github.com/repos/edull24/edull24.github.io","forks_url":"https://api.github.com/repos/edull24/edull24.github.io/forks","keys_url":"https://api.github.com/repos/edull24/edull24.github.io/keys{/key_id}","collaborators_url":"https://api.github.com/repos/edull24/edull24.github.io/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/edull24/edull24.github.io/teams","hooks_url":"https://api.github.com/repos/edull24/edull24.github.io/hooks","issue_events_url":"https://api.github.com/repos/edull24/edull24.github.io/issues/events{/number}","events_url":"https://api.github.com/repos/edull24/edull24.github.io/events","assignees_url":"https://api.github.com/repos/edull24/edull24.github.io/assignees{/user}","branches_url":"https://api.github.com/repos/edull24/edull24.github.io/branches{/branch}","tags_url":"https://api.github.com/repos/edull24/edull24.github.io/tags","blobs_url":"https://api.github.com/repos/edull24/edull24.github.io/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/edull24/edull24.github.io/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/edull24/edull24.github.io/git/refs{/sha}","trees_url":"https://api.github.com/repos/edull24/edull24.github.io/git/trees{/sha}","statuses_url":"https://api.github.com/repos/edull24/edull24.github.io/statuses/{sha}","languages_url":"https://api.github.com/repos/edull24/edull24.github.io/languages","stargazers_url":"https://api.github.com/repos/edull24/edull24.github.io/stargazers","contributors_url":"https://api.github.com/repos/edull24/edull24.github.io/contributors","subscribers_url":"https://api.github.com/repos/edull24/edull24.github.io/subscribers","subscription_url":"https://api.github.com/repos/edull24/edull24.github.io/subscription","commits_url":"https://api.github.com/repos/edull24/edull24.github.io/commits{/sha}","git_commits_url":"https://api.github.com/repos/edull24/edull24.github.io/git/commits{/sha}","comments_url":"https://api.github.com/repos/edull24/edull24.github.io/comments{/number}","issue_comment_url":"https://api.github.com/repos/edull24/edull24.github.io/issues/comments/{number}","contents_url":"https://api.github.com/repos/edull24/edull24.github.io/contents/{+path}","compare_url":"https://api.github.com/repos/edull24/edull24.github.io/compare/{base}...{head}","merges_url":"https://api.github.com/repos/edull24/edull24.github.io/merges","archive_url":"https://api.github.com/repos/edull24/edull24.github.io/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/edull24/edull24.github.io/downloads","issues_url":"https://api.github.com/repos/edull24/edull24.github.io/issues{/number}","pulls_url":"https://api.github.com/repos/edull24/edull24.github.io/pulls{/number}","milestones_url":"https://api.github.com/repos/edull24/edull24.github.io/milestones{/number}","notifications_url":"https://api.github.com/repos/edull24/edull24.github.io/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/edull24/edull24.github.io/labels{/name}","releases_url":"https://api.github.com/repos/edull24/edull24.github.io/releases{/id}","created_at":"2014-03-16T17:55:49Z","updated_at":"2014-03-22T21:18:51Z","pushed_at":"2014-03-22T21:18:50Z","git_url":"git://github.com/edull24/edull24.github.io.git","ssh_url":"git@github.com:edull24/edull24.github.io.git","clone_url":"https://github.com/edull24/edull24.github.io.git","svn_url":"https://github.com/edull24/edull24.github.io","homepage":"http://edull24.github.io","size":0,"stargazers_count":0,"watchers_count":0,"language":"JavaScript","has_issues":true,"has_downloads":true,"has_wiki":true,"forks_count":0,"mirror_url":null,"open_issues_count":0,"forks":0,"open_issues":0,"watchers":0,"default_branch":"master","master_branch":"master"},{"id":17516258,"name":"ScrollWatch","full_name":"edull24/ScrollWatch","owner":{"login":"edull24","id":2624149,"avatar_url":"https://avatars.githubusercontent.com/u/2624149?","gravatar_id":"dcded3f8e523a02b2f2ecb6be8b4e2dd","url":"https://api.github.com/users/edull24","html_url":"https://github.com/edull24","followers_url":"https://api.github.com/users/edull24/followers","following_url":"https://api.github.com/users/edull24/following{/other_user}","gists_url":"https://api.github.com/users/edull24/gists{/gist_id}","starred_url":"https://api.github.com/users/edull24/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/edull24/subscriptions","organizations_url":"https://api.github.com/users/edull24/orgs","repos_url":"https://api.github.com/users/edull24/repos","events_url":"https://api.github.com/users/edull24/events{/privacy}","received_events_url":"https://api.github.com/users/edull24/received_events","type":"User","site_admin":false},"private":false,"html_url":"https://github.com/edull24/ScrollWatch","description":"Easily add lazy loading, infinite scrolling, or any other dynamic interaction based on scroll position (with no dependencies). ","fork":false,"url":"https://api.github.com/repos/edull24/ScrollWatch","forks_url":"https://api.github.com/repos/edull24/ScrollWatch/forks","keys_url":"https://api.github.com/repos/edull24/ScrollWatch/keys{/key_id}","collaborators_url":"https://api.github.com/repos/edull24/ScrollWatch/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/edull24/ScrollWatch/teams","hooks_url":"https://api.github.com/repos/edull24/ScrollWatch/hooks","issue_events_url":"https://api.github.com/repos/edull24/ScrollWatch/issues/events{/number}","events_url":"https://api.github.com/repos/edull24/ScrollWatch/events","assignees_url":"https://api.github.com/repos/edull24/ScrollWatch/assignees{/user}","branches_url":"https://api.github.com/repos/edull24/ScrollWatch/branches{/branch}","tags_url":"https://api.github.com/repos/edull24/ScrollWatch/tags","blobs_url":"https://api.github.com/repos/edull24/ScrollWatch/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/edull24/ScrollWatch/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/edull24/ScrollWatch/git/refs{/sha}","trees_url":"https://api.github.com/repos/edull24/ScrollWatch/git/trees{/sha}","statuses_url":"https://api.github.com/repos/edull24/ScrollWatch/statuses/{sha}","languages_url":"https://api.github.com/repos/edull24/ScrollWatch/languages","stargazers_url":"https://api.github.com/repos/edull24/ScrollWatch/stargazers","contributors_url":"https://api.github.com/repos/edull24/ScrollWatch/contributors","subscribers_url":"https://api.github.com/repos/edull24/ScrollWatch/subscribers","subscription_url":"https://api.github.com/repos/edull24/ScrollWatch/subscription","commits_url":"https://api.github.com/repos/edull24/ScrollWatch/commits{/sha}","git_commits_url":"https://api.github.com/repos/edull24/ScrollWatch/git/commits{/sha}","comments_url":"https://api.github.com/repos/edull24/ScrollWatch/comments{/number}","issue_comment_url":"https://api.github.com/repos/edull24/ScrollWatch/issues/comments/{number}","contents_url":"https://api.github.com/repos/edull24/ScrollWatch/contents/{+path}","compare_url":"https://api.github.com/repos/edull24/ScrollWatch/compare/{base}...{head}","merges_url":"https://api.github.com/repos/edull24/ScrollWatch/merges","archive_url":"https://api.github.com/repos/edull24/ScrollWatch/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/edull24/ScrollWatch/downloads","issues_url":"https://api.github.com/repos/edull24/ScrollWatch/issues{/number}","pulls_url":"https://api.github.com/repos/edull24/ScrollWatch/pulls{/number}","milestones_url":"https://api.github.com/repos/edull24/ScrollWatch/milestones{/number}","notifications_url":"https://api.github.com/repos/edull24/ScrollWatch/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/edull24/ScrollWatch/labels{/name}","releases_url":"https://api.github.com/repos/edull24/ScrollWatch/releases{/id}","created_at":"2014-03-07T14:24:15Z","updated_at":"2014-03-15T19:49:51Z","pushed_at":"2014-03-15T19:49:51Z","git_url":"git://github.com/edull24/ScrollWatch.git","ssh_url":"git@github.com:edull24/ScrollWatch.git","clone_url":"https://github.com/edull24/ScrollWatch.git","svn_url":"https://github.com/edull24/ScrollWatch","homepage":"","size":164,"stargazers_count":2,"watchers_count":2,"language":null,"has_issues":true,"has_downloads":true,"has_wiki":true,"forks_count":0,"mirror_url":null,"open_issues_count":8,"forks":0,"open_issues":8,"watchers":2,"default_branch":"master","master_branch":"master"}],

		setupDom = function() {

			dom.document = $(document);
			dom.nav = $('nav');
			dom.projectMenu = dom.nav.find('.project-menu');
			dom.avatarImg = $('#avatar');
			dom.numbersRow = $('#numbers');
			dom.numberList = dom.numbersRow.find('ul');
			dom.reposRow = $('#repos');
			dom.reposList = dom.reposRow.find('ul');

		},

		setupFoundation = function() {

			dom.document.foundation();

		},

		getUserData = function() {

			var url = githubApi.base + 'users/edull24';

			$.getJSON(url).done(function(data) {

				userData = data;

				$(function() {

					dom.numberList.html(api.jst.numberItems(userData));

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

				processRepoData(response, page);

			}).fail(function() {

				handleNoRepos('fail');

				showRepos();

			});

		},

		processRepoData = function(response, page) {

			if (response.data && response.data.length) {

				// Save the repos and request the next batch.

				repos = repos.concat(response.data);

				getRepos(page + 1);

			} else {

				// All repos have been fetched, wait for the dom
				// to be ready and then add dynamic content.

				$(function() {

					if (repos.length) {

						injectRepoData();

					} else {

						// We have no repos.

						handleNoRepos();

					}

					showRepos();

				});

			}

		},

		injectRepoData = function() {

			var projectItems = '',
				repoItems = '';

			$.each(repos, function(i, repo) {

				projectItems += api.jst.projectMenuItem(repo);
				repoItems += api.jst.repoItem(repo);

			});

			dom.projectMenu.append(projectItems);
			dom.reposList.html(repoItems);

		},

		showRepos = function() {

			dom.reposRow.removeClass('no-opacity');

		},

		handleNoRepos = function(type) {

			dom.reposList
				.removeClass()
				.addClass('no-repos')
				.find('.alert-box')
					.prepend(api.jst.noRepos({fail: type}));

			// Hack to get transition delay to work.
			setTimeout(function(){

				dom.reposList
					.find('.frown')
						.addClass('rotate');

			}, 0);

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