#!/bin/bash
if [[ ! -f "tailwindcss" ]]; then

  # Define the Tailwind CSS version
  TAILWIND_VERSION="v4.0.9"

  # Define the filenames for each OS and architecture
  OS_ARCHS=("linux_x64" "linux_arm64" "darwin_x64" "darwin_arm64" "windows_x64")
  TAILWIND_FILES=("tailwindcss-linux-x64" "tailwindcss-linux-arm64" "tailwindcss-macos-x64" "tailwindcss-macos-arm64" "tailwindcss-windows-x64.exe")

  # Determine the OS
  OS=$(uname | tr '[:upper:]' '[:lower:]')

  # Determine the architecture
  ARCH=$(uname -m)

  # Combine OS and architecture to form the key
  OS_ARCH="${OS}_${ARCH}"

  # Find the index of the OS_ARCH in the OS_ARCHS array
  index=-1
  for i in "${!OS_ARCHS[@]}"; do
    if [[ "${OS_ARCHS[$i]}" == "$OS_ARCH" ]]; then
      index=$i
      break
    fi
  done

  # Check if the OS and architecture combination is supported
  if [[ $index -eq -1 ]]; then
    echo "Unsupported OS or architecture: $OS_ARCH"
    exit 1
  fi

  # Define the Tailwind CSS filename for the current OS and architecture
  TAILWIND_FILE=${TAILWIND_FILES[$index]}

  # Check if the tailwindcss file exists
  TWD_URL="https://github.com/tailwindlabs/tailwindcss/releases/download/$TAILWIND_VERSION/$TAILWIND_FILE"
  
  echo "Tailwindcss not found. Downloading for $TAILWIND_FILE..."
  echo "Downloading from $TWD_URL"
  # Download the Tailwind CSS file
  curl -sLO "$TWD_URL"

  # Make the file executable
  chmod +x "$TAILWIND_FILE"

  # Rename the file to tailwindcss
  mv "$TAILWIND_FILE" tailwindcss
fi

# Run the tailwindcss command
./tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch --minify