"use client";

import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentV3() {
  useEffect(() => {
    /**
     * All config. options available here:
     * https://cookieconsent.orestbida.com/reference/configuration-reference.html
     */
    CookieConsent.run({
      onConsent: function () {
        if (CookieConsent.acceptedCategory("analytics")) {
          // Analytics category enabled
        }

        if (CookieConsent.acceptedService("Google Analytics", "analytics")) {
          // Google Analytics enabled
        }
      },

      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },

        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^(_ga|_gid)/,
              },
              {
                name: /^(_hj)/,
              },
            ],
          },
        },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Hello traveller, it's cookie time!",
              description: `This website uses tracking cookies to understand how you interact with it. The tracking will be enabled only if you accept explicitly. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>`,
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage Individual preferences",
              footer: `<a href="/privacy-policy">Privacy Policy</a>`,
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Cookie Usage",
                  description:
                    'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/privacy-policy" class="cc__link">privacy policy</a>.',
                },
                {
                  title: "Strictly necessary cookies",
                  description:
                    "These cookies are necessary for the site to function properly.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use the website. All of the data is anonymised and cannot be used to identify you.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    headers: {
                      name: "Name",
                      domain: "Service",
                      description: "Description",
                      expiration: "Expiration",
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: "Google Analytics",
                        description: "Cookie set by Google Analytics",
                        expiration: "Expires after 2 years",
                      },
                      {
                        name: "_gid",
                        domain: "Google Analytics",
                        description: "Cookie set by Google Analytics",
                        expiration: "24 hours",
                      },

                      {
                        name: "_hjSessionUser_{site_id}",
                        domain: "Hotjar",
                        description: "Cookie set by Hotjar",
                        expiration: "365 days",
                      },
                      {
                        name: "_hjSession_{site_id}",
                        domain: "Hotjar",
                        description: "Cookie set by Hotjar",
                        expiration: "30 minutes",
                      },
                      {
                        name: "_hjIncludedInPageviewSample",
                        domain: "Hotjar",
                        description: "Cookie set by Hotjar",
                        expiration: "-",
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
