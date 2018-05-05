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
LIBS:power-unit-cache
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
L D_Bridge_+-AA D1
U 1 1 5AE78803
P 5450 1050
F 0 "D1" H 5500 1325 50  0000 L CNN
F 1 "MB10F" H 5500 1250 50  0000 L CNN
F 2 "Diodes_SMD:Diode_Bridge_TO-269AA" H 5450 1050 50  0001 C CNN
F 3 "" H 5450 1050 50  0001 C CNN
	1    5450 1050
	1    0    0    -1  
$EndComp
Wire Wire Line
	4900 1050 4900 700 
Wire Wire Line
	4900 700  5450 700 
Wire Wire Line
	5450 700  5450 750 
Wire Wire Line
	4900 1450 5450 1450
Wire Wire Line
	5450 1450 5450 1350
$Comp
L L7805 U1
U 1 1 5AE7895E
P 6400 1050
F 0 "U1" H 6250 1175 50  0000 C CNN
F 1 "L7805" H 6400 1175 50  0000 L CNN
F 2 "TO_SOT_Packages_THT:TO-220-3_Vertical" H 6425 900 50  0001 L CIN
F 3 "" H 6400 1000 50  0001 C CNN
	1    6400 1050
	1    0    0    -1  
$EndComp
Wire Wire Line
	5750 1050 6100 1050
$Comp
L C C1
U 1 1 5AE789D5
P 5950 1300
F 0 "C1" H 5975 1400 50  0000 L CNN
F 1 "1000uF" H 5975 1200 50  0000 L CNN
F 2 "Capacitors_ThroughHole:C_Radial_D8_L13_P3.8" H 5988 1150 50  0001 C CNN
F 3 "" H 5950 1300 50  0001 C CNN
	1    5950 1300
	1    0    0    -1  
$EndComp
$Comp
L C C2
U 1 1 5AE78A9B
P 6800 1300
F 0 "C2" H 6825 1400 50  0000 L CNN
F 1 "1uF" H 6825 1200 50  0000 L CNN
F 2 "Capacitors_ThroughHole:C_Radial_D10_L16_P5" H 6838 1150 50  0001 C CNN
F 3 "" H 6800 1300 50  0001 C CNN
	1    6800 1300
	1    0    0    -1  
$EndComp
Wire Wire Line
	5950 1150 5950 1050
Connection ~ 5950 1050
Wire Wire Line
	6700 1050 7000 1050
Wire Wire Line
	6800 1050 6800 1150
Wire Wire Line
	5150 1050 5150 1550
Wire Wire Line
	5150 1550 7000 1550
Wire Wire Line
	5950 1550 5950 1450
Wire Wire Line
	6800 1550 6800 1450
Connection ~ 5950 1550
Wire Wire Line
	6400 1350 6400 1550
Connection ~ 6400 1550
$Comp
L GND #PWR01
U 1 1 5AE78B5D
P 6800 1550
F 0 "#PWR01" H 6800 1300 50  0001 C CNN
F 1 "GND" H 6800 1400 50  0000 C CNN
F 2 "" H 6800 1550 50  0001 C CNN
F 3 "" H 6800 1550 50  0001 C CNN
	1    6800 1550
	1    0    0    -1  
$EndComp
Connection ~ 6800 1550
$Comp
L +3.3V #PWR02
U 1 1 5AE78DA7
P 6800 1050
F 0 "#PWR02" H 6800 900 50  0001 C CNN
F 1 "+3.3V" H 6800 1190 50  0000 C CNN
F 2 "" H 6800 1050 50  0001 C CNN
F 3 "" H 6800 1050 50  0001 C CNN
	1    6800 1050
	1    0    0    -1  
$EndComp
Connection ~ 6800 1050
$Comp
L Conn_01x01 J1
U 1 1 5AE88FA3
P 3900 1050
F 0 "J1" H 3900 1150 50  0000 C CNN
F 1 "AC_L" H 3900 950 50  0000 C CNN
F 2 "Connect:1pin" H 3900 1050 50  0001 C CNN
F 3 "" H 3900 1050 50  0001 C CNN
	1    3900 1050
	-1   0    0    1   
$EndComp
$Comp
L Conn_01x01 J2
U 1 1 5AE89027
P 3900 1450
F 0 "J2" H 3900 1550 50  0000 C CNN
F 1 "AC_N" H 3900 1350 50  0000 C CNN
F 2 "Connect:1pin" H 3900 1450 50  0001 C CNN
F 3 "" H 3900 1450 50  0001 C CNN
	1    3900 1450
	-1   0    0    1   
$EndComp
$Comp
L Conn_01x01 J3
U 1 1 5AE89144
P 7200 1050
F 0 "J3" H 7200 1150 50  0000 C CNN
F 1 "VCC" H 7200 950 50  0000 C CNN
F 2 "Connect:1pin" H 7200 1050 50  0001 C CNN
F 3 "" H 7200 1050 50  0001 C CNN
	1    7200 1050
	1    0    0    -1  
$EndComp
$Comp
L Conn_01x01 J4
U 1 1 5AE891CC
P 7200 1550
F 0 "J4" H 7200 1650 50  0000 C CNN
F 1 "GND" H 7200 1450 50  0000 C CNN
F 2 "Connect:1pin" H 7200 1550 50  0001 C CNN
F 3 "" H 7200 1550 50  0001 C CNN
	1    7200 1550
	1    0    0    -1  
$EndComp
$Comp
L TAZ_Breve_22x24 T1
U 1 1 5AE89A5D
P 4500 1250
F 0 "T1" H 4500 1500 50  0000 C CNN
F 1 "TAZ_Breve_22x24" H 4500 950 50  0000 C CNN
F 2 "Transformers_THT:Transformer_Breve_TEZ-22x24" H 4500 1250 50  0001 C CNN
F 3 "" H 4500 1250 50  0001 C CNN
	1    4500 1250
	1    0    0    -1  
$EndComp
$EndSCHEMATC
