#!/usr/bin/env bash
set -euo pipefail

APP_DIR=${APP_DIR:-/var/www/jds/app}
REPO=${REPO:-"https://github.com/justdigitalmedia/my-react-app.git"}
GIT_REF=${GIT_REF:-main}

ssh -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" "mkdir -p $APP_DIR && sudo mkdir -p /var/www/jds && sudo chown -R $VPS_USER:$VPS_USER /var/www/jds"

ssh "$VPS_USER@$VPS_HOST" "test -d $APP_DIR/.git || git clone $REPO $APP_DIR"
ssh "$VPS_USER@$VPS_HOST" "cd $APP_DIR && git fetch --all && git checkout $GIT_REF && git reset --hard origin/$GIT_REF"

ssh "$VPS_USER@$VPS_HOST" "bash -lc 'source ~/.nvm/nvm.sh || true; command -v nvm >/dev/null || curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash'"
ssh "$VPS_USER@$VPS_HOST" "bash -lc 'source ~/.nvm/nvm.sh && nvm install --lts && cd $APP_DIR && npm ci && npm run build'"

ssh "$VPS_USER@$VPS_HOST" "sudo nginx -t && sudo systemctl reload nginx"
echo "✅ Deploy complete"
