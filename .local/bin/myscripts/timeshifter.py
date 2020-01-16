#!/bin/python3.8

import subprocess
import os
import time
#sudo mkdir /run/media/TimeShift
#sudo timeshift --check






snapshots = "/timeshift/snapshots"
mount_point = "/run/media/TimeShift"
mounted = mount_point+snapshots
is_mount_point = os.path.isdir(mount_point)
is_mounted = os.path.isdir(mounted)
source = "c03207d9-6573-46ff-bb14-7f96b3bd943c"



def auto_timeshift_checker():
    backup = subprocess.run(['sudo', 'timeshift', '--check'], capture_output=True, text=True)
    output = subprocess.run(['lastbackup'], capture_output=True, text=True)
    output
    backup
    print(output.stdout)




def is_false():
    if is_mounted == False:
        mount = subprocess.run(['sudo', 'mount', '--uuid', source, mount_point], capture_output=True, text=True)
        mount.stdout
        auto_timeshift_checker()
    else:
        print("Error Mounting Backup-Device")


def is_real():
    if is_mount_point == False:
        print('Creating TimeShift directory in /run/media/')
        os.system('sudo mkdir /run/media/TimeShift')
    else:
        is_false()


def is_true():
    if is_mount_point == True:
        if is_mounted == True:
            auto_timeshift_checker()
            print('TimeShifting Now!!')
            is_false
        else:
            print('No Backup-Device found')
            is_false()
    else:
        is_real()






is_true()



