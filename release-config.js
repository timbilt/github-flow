module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/timbilt/github-flow",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
