/*
 * Shared site components
 * ------------------------------------------------------------
 * Loads header/footer once for every page and automatically
 * marks the current navigation item.
 */

(function () {
    "use strict";

    function loadText(url) {
        return fetch(url, { cache: "no-cache" }).then(function (response) {
            if (!response.ok) {
                throw new Error("Could not load " + url + " (" + response.status + ")");
            }
            return response.text();
        });
    }

    function currentPageKey() {
        var file = window.location.pathname.split("/").pop().toLowerCase();

        if (!file || file === "index.html") return "home";
        if (file === "about.html") return "about";
        if (file === "projects.html") return "projects";
        if (file === "restricted.html") return "restricted section";

        // Individual project pages belong to the Projects section.
        if (file.indexOf("project-") === 0) return "projects";

        return "";
    }

    function setCurrentNavigation() {
        var key = currentPageKey();

        document.querySelectorAll("[data-nav]").forEach(function (link) {
            var isCurrent = key && link.getAttribute("data-nav") === key;
            link.classList.toggle("is-current", !!isCurrent);

            if (isCurrent && link.classList.contains("nav-link")) {
                link.setAttribute("aria-current", "page");
            }
        });
    }

    function setYear() {
        document.querySelectorAll("[data-current-year]").forEach(function (el) {
            el.textContent = new Date().getFullYear();
        });
    }

    function injectComponents() {
        var headerSlot = document.getElementById("site-header");
        var footerSlot = document.getElementById("site-footer");

        var jobs = [];

        if (headerSlot) {
            jobs.push(
                loadText("components/header.html").then(function (html) {
                    headerSlot.outerHTML = html;
                })
            );
        }

        if (footerSlot) {
            jobs.push(
                loadText("components/footer.html").then(function (html) {
                    footerSlot.outerHTML = html;
                })
            );
        }

        Promise.all(jobs)
            .then(function () {
                setCurrentNavigation();
                setYear();
            })
            .catch(function (error) {
                console.error("Shared component loader:", error);
            });
    }

    document.addEventListener("DOMContentLoaded", injectComponents);
})();
