import "@actions/core"
import "@actions/exec"

async function run() {
    try {
        const versionType = core.getInput('version-type');
        const src = _dirname;

        await exec.exec(`${src}/git_update.sh -v ${versionType}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

    run();