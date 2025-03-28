#!/bin/bash
# Task 1: Run yarn patch-package --use-yarn
echo "Running yarn patch-package --use-yarn..."
yarn patch-package --use-yarn
echo "Task 1 completed."

# Task 2: Run npx pod-install (only for macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
# setup environment
  gem install bundler
  bundle check || bundle install
  echo "Running npx pod-install..."
  bundle exec npx pod-install
  echo "Task 2 completed."
else
  echo "Skipping npx pod-install as it is only required for macOS."
fi

#!/bin/bash
# Task 3: npx react-native-asset
echo "Running npx react-native-asset"
npx react-native-asset
echo "Task 3 completed."

echo "All tasks completed successfully."
