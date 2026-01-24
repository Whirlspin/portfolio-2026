// instrumentation-client.js
import posthog from "posthog-js";

posthog.init("phc_OYrExuPYJkvPeacncHbUC3nOkFsDfsivrHPXymly0BO", {
  api_host: "https://eu.i.posthog.com",
  defaults: "2025-11-30",
  cookieless_mode: "on_reject",
});
