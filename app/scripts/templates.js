this["app"] = this["app"] || {};
this["app"]["jst"] = this["app"]["jst"] || {};

this["app"]["jst"]["alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["app"]["jst"]["noRepos"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n\n	Bummer dude, looks like the repo request failed.\n\n";
  }

function program3(depth0,data) {
  
  
  return "\n\n	You better get your game up and add some repos son!\n\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fail), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<br>\n\n<div class=\"frown\">:(</div>";
  return buffer;
  });

this["app"]["jst"]["numberItems"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>\n	<div>Public Repos:</div>\n	<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.public_repos)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>\n<li>\n	<div>Public Gists:</div>\n	<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.public_gists)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>\n<li>\n	<div>Followers:</div>\n	<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.followers)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>\n<li>\n	<div>Following:</div>\n	<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.following)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>";
  return buffer;
  });

this["app"]["jst"]["projectMenuItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>\n\n	<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n		"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n\n	</a>\n\n</li>";
  return buffer;
  });

this["app"]["jst"]["repoItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>\n\n	<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n		<h2>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n\n		<h3>"
    + escapeExpression(((stack1 = (depth0 && depth0.language)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n\n		<p>\n			"
    + escapeExpression(((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n		</p>\n\n	</a>\n\n</li>";
  return buffer;
  });