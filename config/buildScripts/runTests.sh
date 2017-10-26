#!/bin/bash
SCRATCHORGALIAS=${1:-testScratchOrg}
sfdx force:org:create -f config/project-scratch-def.json -a $SCRATCHORGALIAS
sfdx force:source:push -u $SCRATCHORGALIAS
sfdx force:apex:test:run  -u $SCRATCHORGALIAS -r human --wait 120
sfdx force:org:delete -u $SCRATCHORGALIAS -p