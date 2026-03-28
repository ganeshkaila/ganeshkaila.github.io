#!/usr/bin/env python3
"""One-off: extract badge id + name from Credly badges.json export."""
import json
import sys

def main(path: str) -> None:
    with open(path, encoding="utf-8") as f:
        d = json.load(f)
    for b in d.get("data", []):
        bid = b.get("id", "")
        name = (b.get("badge_template") or {}).get("name", "?")
        url = f"https://www.credly.com/badges/{bid}"
        print(f"{name}\t{url}")

if __name__ == "__main__":
    main(sys.argv[1])
