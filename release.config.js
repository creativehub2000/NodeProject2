module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/creativehub2000/NodeProject2",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github", {
            assets: [
                {path: "build.zip", label: "Build"}
            ]
        }]
    ]
};