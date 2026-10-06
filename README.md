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

Download the Stainless-documented OpenAPI spec to `openapi.yaml`, then generate the API reference docs in `api-reference/`:

Install the [Stainless CLI (`stl`)](https://github.com/stainless-api/stainless-api-cli#installation) and create a Stainless API key with access to the `scorecard` project from your organization's API Keys tab. The command below downloads the [OpenAPI build output with code samples](https://www.stainless.com/docs/api/resources/builds/subresources/target_outputs/methods/retrieve/) from the latest build on `main`. Use this documented spec, which contains `x-codeSamples`, rather than the undecorated spec linked in SDK repositories' `.stats.yml`.

```sh
export STAINLESS_API_KEY='<your-stainless-api-key>'
STAINLESS_SPEC_URL=$(stl --format json --transform url --raw-output \
  builds:target-outputs retrieve --project scorecard --branch main \
  --target typescript --type openapi-with-code-samples --output url) &&
curl --fail --location "$STAINLESS_SPEC_URL" -o openapi.yaml &&
grep -q 'x-codeSamples:' openapi.yaml &&
npx @mintlify/scraping@latest openapi-file openapi.yaml -o api-reference
```

If you added, deleted, or renamed any API endpoints, you should also update the "API reference" page links in `docs.json`.

## Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` to re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with  `docs.json`