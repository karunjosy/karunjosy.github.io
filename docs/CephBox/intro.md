---
sidebar_position: 1
---

# Intro

# CephBox : A Home Cloud solution


## Project 

Empower Your Home Network with a Robust NAS Solution Powered by Ceph /
Implementing a Home Cloud NAS with Ceph for Enhanced Scalability and Reliability /
DIY opensource Home Cloud setup with Ceph.

Why CephBox?

A product must be a solution to real world problem.
What is the problem  : 
Cloud storage for personal use is 'expensive' and 'overkill'. 
External individual Hard drives and USB sticks which majority of the population uses does not have a long 'shell life', just waiting for the memories to be lost forever.

[[Some real life examples: 
    My mother lost all her photos and videos of her grandchildren that she took when her mobile phone was lost.
    My wife has to frequently delete my childs early videos to clear up space for the mobile phone.
    My friend has been saving his photos from college on a 64GB external SD card which got corrupted and lost everything.
    I see lot of people complaining their google drive is filling up and its expensive to buy the premium plan

The data that we are talking about does not always have monetary value associated to it but has tremendous emotional value.]]


    How 'expensive' is public cloud storage?
        - Google One - 2 TB plan for a family costs 6500/year
        - Microsoft One drive - 6 TB for a family costs 7000/year 

    Why public cloud storage is an 'overkill'?  

        Assuming a person takes 1 photo per day and records 1 minute of video per day;

        Total size for photos: 365 photos * 4 MB/photo (average) = 1,460 MB/year ≈ 1.46 GB/year
        Total size for videos: 365 minutes * 150 MB/minute (average) = 54,750 MB/year ≈ 54.75 GB/year
        Total data generated per year: 1.46 GB (photos) + 54.75 GB (videos) ≈ 56.21 GB/year

        If it's a family of 4, that's around 200GB new data generated each year; 
        Then there's your constant and long living core life event memories like
        - your wedding album and video which adds up another 50GB
        - your child's first birthday, first dance performance etc - 20GB
        - your learning stuff - 10 GB
        - I am sure 90% of the people have another 20GB photo/video of their dog and cat.

        So a total 1 TB is all that you require to store your memories for the next 5 years. 

        And let's be honest, half of the photos are not that great. Perhaps only 10% are worth keeping and even those might not be revisited for years. But reality is that we eventually do look back at them.
        Nostalgia and reminiscence are potent human emotions and powerful motivators. 

        Same applies to the professional and amateur photographers and content creators out there. They might need comparitively more storage but the nature   of the data is similar; cold, archival, and not constantly accessed  but should be easily and readily accessible when the time comes. 

    What is the 'shell life' of the current personal data storage alternatives? Are they really reliable and durable?
    Which type of disk or medium should you choose to store your personal data?
            - SSDs typically last 5-7 years for consumer models 
            - while HDDs generally last 3-5 years for consumer models
            - Tapes, 30 years!!
    


So a public cloud solution is not the perfect fit for a personal use case. It is an overkill. 
There should be a de-centralized hybrid solution for personal data storage without cutting off the benefits of cloud storage. At the same time the solution should be highly reliable with lifetime gurantee of the data.


So what's the solution we are proposing:
 - a better but cheap alternative; I would be happy if I can spent 15000Rs one time to get a 2 TB storage space for my family which I can use for 5-6 years.
 - data durability - Ceph provides 3 replica solution so we can withstand individual hard disk failures. We just need to replace the failed drives.
 - data accessibility - Object, file and block access. One storage solution for everything you can think of. (Linux of storage)
 - Archival - feature to back up the storage using Tape media servers publicly available for cheap storage (eg:amazon Glacier)



Project Components Overview :

        Hardware:  a sleek, compact hardware box designed to blend seamlessly with any home decor, this device connects to the electrical power source and LAN or wifi home network.
        Powered by Raspberry Pi CPU and 4 SSDs.

        Storage : single node Ceph cluster providing RGW(for object storage) and CephFS(shared file system)

        Webserver interface : to create and customize the pools

        App: access the photos,files and manage the storage from multiple home devices even from anywhere in the world.

