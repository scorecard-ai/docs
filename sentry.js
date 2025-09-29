(function () {
  let environment = "development";
  if (window.location.hostname.endsWith(".scorecard.io")) {
    environment = "production";
  } else if (window.location.hostname.endsWith(".mintlify.app")) {
    environment = "preview";
  }

  window.sentryOnLoad = function () {
    Sentry.init({
      environment,
      integrations: [
        Sentry.replayIntegration({
          maskAllText: false,
          maskAllInputs: false,
          blockAllMedia: false,
        }),
      ],
      tracesSampleRate: 0,
      replaysSessionSampleRate: 1,
    });

    function getCookie(name) {
      const nameEQ = name + "=";
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        cookie = cookie.trimStart();
        if (cookie.startsWith(nameEQ)) {
          return decodeURIComponent(cookie.substring(nameEQ.length));
        }
      }
      return null;
    }

    // Set user context based on available data
    const scorecardUserId = getCookie("scorecard_user_id");
    if (scorecardUserId) {
      Sentry.setUser({
        id: scorecardUserId,
        email: getCookie("scorecard_user_email") || undefined,
      });
    } else {
      // Fallback: Generate anonymous visitor ID
      let visitorId = localStorage.getItem("visitor_id");
      if (!visitorId) {
        visitorId = "anon_" + Math.random().toString(36).substring(2, 11);
        localStorage.setItem("visitor_id", visitorId);
      }

      Sentry.setUser({
        id: visitorId,
      });
    }
  };

  // Load Sentry SDK from CDN
  const script = document.createElement("script");
  script.src =
    "https://js.sentry-cdn.com/1cbbaf972eeb91a7ef89621efd496538.min.js";
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
})();
