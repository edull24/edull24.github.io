define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["alert"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n\nBummer dude, looks like the request failed.\n\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n"
    + escapeExpression(((stack1 = (depth0 && depth0.msg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n\n";
  return buffer;
  }

  buffer += "<div class=\"alert-box text-center\" data-alert=\"\">\n\n<p class=\"msg\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.failure), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</p>\n\n<p class=\"frown\">:(</p>\n\n<a href=\"#\" class=\"close\">&times;</a>\n\n</div>\n";
  return buffer;
  });

this["JST"]["numberItems"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>\n<div>Public Repos:</div>\n<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.public_repos)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>\n<li>\n<div>Public Gists:</div>\n<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.public_gists)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>\n<li>\n<div>Followers:</div>\n<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.followers)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>\n<li>\n<div>Following:</div>\n<div>"
    + escapeExpression(((stack1 = (depth0 && depth0.following)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n</li>\n";
  return buffer;
  });

this["JST"]["projectMenuItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>\n\n<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n\n</a>\n\n</li>\n";
  return buffer;
  });

this["JST"]["repoItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>\n\n<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n<h2>"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n\n<h3>"
    + escapeExpression(((stack1 = (depth0 && depth0.language)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n\n<p>"
    + escapeExpression(((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n</a>\n\n</li>\n";
  return buffer;
  });

return this["JST"];

});