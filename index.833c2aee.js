function e(e){return e.includes("Name")?e.slice(0,-4)+" Name":e}document.querySelectorAll(".field-text").forEach(function(n){n.insertAdjacentHTML("beforebegin",'<label class="field-label" for='.concat(n.id,">\n      ").concat(e(n.name),"\n    </label>")),n.setAttribute("placeholder","".concat(e(n.name[0].toUpperCase()+n.name.slice(1))))});
//# sourceMappingURL=index.833c2aee.js.map
