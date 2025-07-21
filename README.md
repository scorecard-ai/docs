# Scorecard Docs

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```sh
npm i -g mintlify
```

Run the following command at the root of your documentation (where docs.json is)

```sh
mintlify dev
```

## Updating API reference pages

Download the Stainless-documented OpenAPI spec to `openapi.yaml`:

```sh
curl https://app.stainless.com/api/spec/documented/scorecard/openapi.documented.yml -o openapi.yaml
```

Then generate the API reference docs in `api-reference/`:

```sh
curl https://app.stainless.com/api/spec/documented/scorecard/openapi.documented.yml -o openapi.yaml
npx @mintlify/scraping@latest openapi-file openapi.yaml -o api-reference
```

If you added, deleted, or renamed any API endpoints, you should also update the "API reference" page links in `docs.json`.

## Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` to re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with  `docs.json`