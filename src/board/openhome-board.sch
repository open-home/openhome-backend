EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:74xgxx
LIBS:Zilog
LIBS:zetex
LIBS:Xicor
LIBS:Worldsemi
LIBS:wiznet
LIBS:video
LIBS:ttl_ieee
LIBS:triac_thyristor
LIBS:transf
LIBS:switches
LIBS:supertex
LIBS:stm32
LIBS:stm8
LIBS:silabs
LIBS:sensors
LIBS:RFSolutions
LIBS:rfcom
LIBS:relays
LIBS:references
LIBS:pspice
LIBS:powerint
LIBS:Power_Management
LIBS:Oscillators
LIBS:onsemi
LIBS:nxp
LIBS:nxp_armmcu
LIBS:nordicsemi
LIBS:msp430
LIBS:motors
LIBS:motor_drivers
LIBS:modules
LIBS:microchip_pic32mcu
LIBS:microchip_pic24mcu
LIBS:microchip_pic18mcu
LIBS:microchip_pic16mcu
LIBS:microchip_pic12mcu
LIBS:microchip_pic10mcu
LIBS:microchip_dspic33dsc
LIBS:mechanical
LIBS:maxim
LIBS:logic_programmable
LIBS:LEM
LIBS:leds
LIBS:Lattice
LIBS:ir
LIBS:intersil
LIBS:infineon
LIBS:hc11
LIBS:graphic_symbols
LIBS:gennum
LIBS:ftdi
LIBS:ESD_Protection
LIBS:elec-unifil
LIBS:diode
LIBS:dc-dc
LIBS:cmos_ieee
LIBS:brooktre
LIBS:bosch
LIBS:bbd
LIBS:battery_management
LIBS:analog_devices
LIBS:Altera
LIBS:allegro
LIBS:actel
LIBS:ac-dc
LIBS:openhome-board-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Conn_02x11_Odd_Even J2
U 1 1 5AE77C59
P 5950 1900
F 0 "J2" H 6000 2500 50  0000 C CNN
F 1 "Conn_02x11_Odd_Even" H 6000 1300 50  0000 C CNN
F 2 "atmo:ESPRUINO_WIFI" H 5950 1900 50  0001 C CNN
F 3 "" H 5950 1900 50  0001 C CNN
	1    5950 1900
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR01
U 1 1 5AE78B5D
P 7000 2150
F 0 "#PWR01" H 7000 1900 50  0001 C CNN
F 1 "GND" H 7000 2000 50  0000 C CNN
F 2 "" H 7000 2150 50  0001 C CNN
F 3 "" H 7000 2150 50  0001 C CNN
	1    7000 2150
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR02
U 1 1 5AE78DA7
P 6800 2050
F 0 "#PWR02" H 6800 1900 50  0001 C CNN
F 1 "+3.3V" H 6800 2190 50  0000 C CNN
F 2 "" H 6800 2050 50  0001 C CNN
F 3 "" H 6800 2050 50  0001 C CNN
	1    6800 2050
	-1   0    0    1   
$EndComp
$Comp
L Conn_01x04 J3
U 1 1 5AE78E0A
P 6000 3050
F 0 "J3" H 6000 3250 50  0000 C CNN
F 1 "Conn_01x04" H 6000 2750 50  0000 C CNN
F 2 "Connectors_Samtec:SL-104-X-XX_1x04" H 6000 3050 50  0001 C CNN
F 3 "" H 6000 3050 50  0001 C CNN
	1    6000 3050
	-1   0    0    1   
$EndComp
$Comp
L +3.3V #PWR03
U 1 1 5AE78EBE
P 6200 3150
F 0 "#PWR03" H 6200 3000 50  0001 C CNN
F 1 "+3.3V" H 6200 3290 50  0000 C CNN
F 2 "" H 6200 3150 50  0001 C CNN
F 3 "" H 6200 3150 50  0001 C CNN
	1    6200 3150
	-1   0    0    1   
$EndComp
$Comp
L GND #PWR04
U 1 1 5AE78EE1
P 6200 2850
F 0 "#PWR04" H 6200 2600 50  0001 C CNN
F 1 "GND" H 6200 2700 50  0000 C CNN
F 2 "" H 6200 2850 50  0001 C CNN
F 3 "" H 6200 2850 50  0001 C CNN
	1    6200 2850
	0    -1   -1   0   
$EndComp
Text GLabel 6200 2950 2    60   Input ~ 0
I2C_THR_SDA
Text GLabel 6200 3050 2    60   Input ~ 0
I2C_THR_SDL
Text GLabel 6750 1500 2    60   Input ~ 0
I2C_THR_SDA
Text GLabel 6750 1600 2    60   Input ~ 0
I2C_THR_SDL
$Comp
L R R2
U 1 1 5AE78FBF
P 6400 900
F 0 "R2" V 6480 900 50  0000 C CNN
F 1 "4K7" V 6400 900 50  0000 C CNN
F 2 "Resistors_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 6330 900 50  0001 C CNN
F 3 "" H 6400 900 50  0001 C CNN
	1    6400 900 
	1    0    0    -1  
$EndComp
$Comp
L R R3
U 1 1 5AE79007
P 6600 900
F 0 "R3" V 6680 900 50  0000 C CNN
F 1 "4K7" V 6600 900 50  0000 C CNN
F 2 "Resistors_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 6530 900 50  0001 C CNN
F 3 "" H 6600 900 50  0001 C CNN
	1    6600 900 
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR05
U 1 1 5AE79152
P 6500 750
F 0 "#PWR05" H 6500 600 50  0001 C CNN
F 1 "+3.3V" H 6500 890 50  0000 C CNN
F 2 "" H 6500 750 50  0001 C CNN
F 3 "" H 6500 750 50  0001 C CNN
	1    6500 750 
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR06
U 1 1 5AE791CD
P 6250 2200
F 0 "#PWR06" H 6250 2050 50  0001 C CNN
F 1 "+3.3V" H 6250 2340 50  0000 C CNN
F 2 "" H 6250 2200 50  0001 C CNN
F 3 "" H 6250 2200 50  0001 C CNN
	1    6250 2200
	0    1    1    0   
$EndComp
$Comp
L GND #PWR07
U 1 1 5AE791F6
P 6250 2400
F 0 "#PWR07" H 6250 2150 50  0001 C CNN
F 1 "GND" H 6250 2250 50  0000 C CNN
F 2 "" H 6250 2400 50  0001 C CNN
F 3 "" H 6250 2400 50  0001 C CNN
	1    6250 2400
	0    -1   -1   0   
$EndComp
$Comp
L 2N2219 Q1
U 1 1 5AE79571
P 2650 2650
F 0 "Q1" H 2850 2725 50  0000 L CNN
F 1 "2N2219" H 2850 2650 50  0000 L CNN
F 2 "TO_SOT_Packages_THT:TO-39-3" H 2850 2575 50  0001 L CIN
F 3 "" H 2650 2650 50  0001 L CNN
	1    2650 2650
	1    0    0    -1  
$EndComp
$Comp
L R R1
U 1 1 5AE7960E
P 2200 2650
F 0 "R1" V 2280 2650 50  0000 C CNN
F 1 "10K" V 2200 2650 50  0000 C CNN
F 2 "Resistors_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 2130 2650 50  0001 C CNN
F 3 "" H 2200 2650 50  0001 C CNN
	1    2200 2650
	0    1    1    0   
$EndComp
$Comp
L 1N4001 D1
U 1 1 5AE797DE
P 2750 1950
F 0 "D1" H 2750 2050 50  0000 C CNN
F 1 "1N4001" H 2750 1850 50  0000 C CNN
F 2 "Diodes_THT:D_DO-41_SOD81_Horizontal_RM10" H 2750 1775 50  0001 C CNN
F 3 "" H 2750 1950 50  0001 C CNN
	1    2750 1950
	0    1    1    0   
$EndComp
$Comp
L GND #PWR08
U 1 1 5AE79BE2
P 2750 2850
F 0 "#PWR08" H 2750 2600 50  0001 C CNN
F 1 "GND" H 2750 2700 50  0000 C CNN
F 2 "" H 2750 2850 50  0001 C CNN
F 3 "" H 2750 2850 50  0001 C CNN
	1    2750 2850
	1    0    0    -1  
$EndComp
$Comp
L +3.3V #PWR09
U 1 1 5AE79C95
P 2750 1600
F 0 "#PWR09" H 2750 1450 50  0001 C CNN
F 1 "+3.3V" H 2750 1740 50  0000 C CNN
F 2 "" H 2750 1600 50  0001 C CNN
F 3 "" H 2750 1600 50  0001 C CNN
	1    2750 1600
	1    0    0    -1  
$EndComp
Text GLabel 1950 2650 0    60   Input ~ 0
RELAY_DRV
Text GLabel 5650 1400 0    60   Input ~ 0
RELAY_DRV
$Comp
L Conn_01x03 J1
U 1 1 5AE7A355
P 4450 1950
F 0 "J1" H 4450 2150 50  0000 C CNN
F 1 "Conn_01x03" H 4450 1750 50  0000 C CNN
F 2 "Connectors:bornier3" H 4450 1950 50  0001 C CNN
F 3 "" H 4450 1950 50  0001 C CNN
	1    4450 1950
	1    0    0    -1  
$EndComp
$Comp
L Conn_01x02 J4
U 1 1 5AEF1FCE
P 7350 2050
F 0 "J4" H 7350 2150 50  0000 C CNN
F 1 "Conn_01x02" H 7350 1850 50  0000 C CNN
F 2 "" H 7350 2050 50  0001 C CNN
F 3 "" H 7350 2050 50  0001 C CNN
	1    7350 2050
	1    0    0    -1  
$EndComp
Wire Wire Line
	6250 1500 6750 1500
Wire Wire Line
	6250 1600 6750 1600
Wire Wire Line
	6400 1050 6400 1500
Connection ~ 6400 1500
Wire Wire Line
	6600 1050 6600 1600
Connection ~ 6600 1600
Wire Wire Line
	6400 750  6600 750 
Connection ~ 6500 750 
Wire Wire Line
	2350 2650 2450 2650
Wire Wire Line
	2750 1800 2750 1600
Wire Wire Line
	2750 1600 3150 1600
Wire Wire Line
	3150 1600 3150 1650
Wire Wire Line
	3150 2250 3150 2300
Wire Wire Line
	3150 2300 2750 2300
Wire Wire Line
	2750 2100 2750 2450
Connection ~ 2750 2300
Connection ~ 2750 1600
Wire Wire Line
	5650 1400 5750 1400
Wire Wire Line
	1950 2650 2050 2650
Wire Wire Line
	6800 2050 7150 2050
Wire Wire Line
	7000 2150 7150 2150
Wire Wire Line
	3650 1650 3650 1600
Wire Wire Line
	4250 1600 4250 1850
Wire Wire Line
	3650 1600 4250 1600
$Comp
L SANYOU_SRD_Form_C K1
U 1 1 5AEF2DC4
P 3350 1950
F 0 "K1" H 3800 2100 50  0000 L CNN
F 1 "SANYOU_SRD_Form_C" H 3800 2000 50  0000 L CNN
F 2 "Relays_THT:Relay_SPDT_SANYOU_SRD_Series_Form_C" H 4800 1900 50  0001 C CNN
F 3 "" H 3350 1950 50  0001 C CNN
	1    3350 1950
	1    0    0    -1  
$EndComp
Wire Wire Line
	4250 2050 4100 2050
Wire Wire Line
	4100 2050 4100 1500
Wire Wire Line
	4100 1500 3450 1500
Wire Wire Line
	3450 1500 3450 1650
Wire Wire Line
	3550 2250 4000 2250
Wire Wire Line
	4000 2250 4000 1950
Wire Wire Line
	4000 1950 4250 1950
$EndSCHEMATC
