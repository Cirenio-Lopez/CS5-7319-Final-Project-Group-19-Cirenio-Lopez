def main():
    lockedAndUnlocked = LockedAndUnlocked()

    website = GetWebsite(lockedAndUnlocked)
    crawler = Crawler(lockedAndUnlocked)
    sorted = Sorted(lockedAndUnlocked)
    print = Print(lockedAndUnlocked)

    website.getSite()
    crawler.crawl()
    sorted.sort()
    print.print()

if __name__ == "__main__":
    main()