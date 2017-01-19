############################################################################################
## RouteMatch Software, Inc.                                                              ##
## Release version: RM#6.2.28 Precut#15                                                   ##
##                                                                                        ##
##                    * * *                           * * *                               ##
##                    * * *  R E Q U I R E M E N T S  * * *                               ##
##                    * * *                           * * *                               ##
##                                                                                        ##
## 1. RouteMatch Database Setup                                                           ##
##                                                                                        ##
##      YOU MUST FOLLOW THE INSTRUCTIONS IN K#0737 BEFORE USING THIS RELEASE              ##
##                                                                                        ##
##    - Add the read-only database user "rmteller" by running K#0737_rmteller.sql         ##
##                                                                                        ##
##    - Create a new database username and password that belongs to schema [dbo]... or,   ## 
##        you can use the existing "pmuser" account.                                      ##
##                                                                                        ##
##    - Present the Username, Password, and Agency Name to RMSupport                      ##
##        and they will generate a "key".                                                 ##
##                                                                                        ##
##    - Use this "key" with the script: K#0737_Import_Settings.sql                        ##
##        * Paste the key received in Step 5 for the parameter @ImportDatabaseCredentials ##
##        * Execute the script                                                            ##
##                                                                                        ##
##    - Note:  If the client has a "lot" of Fixed Route data in the database,             ##
##      it could take a long time (i.e. 1 hour or more), to run the DB upgrade scripts    ##
##     (29.000 thru 29.004).                                                              ##
##                                                                                        ##
## 2. Requires Microsoft Visual Studio 2010 run-time dlls.                                ##
##      - vcredist_x86.zip - 32bit (Win XP or Win 7)                                      ##
##      - vcredist_x64.zip - 64bit (Win 7)                                                ##
##                                                                                        ##   
## 3. Starting with RouteMatch RM#6.2.00, the entire application requires "raster tile    ##
##    images". The GeoUtil Application is being updated to produce a Geo Manifest         ##
##    including all of the current shapefiles and network information plus the newer      ##
##    raster tile images. Unfortunately, it is not ready for general distribution at this ##
##    time, but development can build these for you on an as-need basis ... please send   ##
##    your request to email address  *Mapping_DevTeam. You will receive errors when       ##
##    opening certain modules if you do not have these raster tile images.                ##
##                                                                                        ##
##                                                                                        ##
############################################################################################


####################################################################################
##                                                                                ##
## Minimum requirements.                                                          ##
##                                                                                ##
####################################################################################
# 
# DB Version                   - 29.905
# GeoManifest                  - 9.019.01
# NetSolve
#    RMNetSolveService3.exe    - 3.163.16
#    RMNetSolveService3_64.exe - 3.163.16
# RMQS                         - 4.254.25
# .NET                         - 4.04.0
# SQL Server                   - SQL 2008 SP3 -OR- SQL 2008 R2
#
####################################################################################


####################################################################################
##                                                                                ##
## The RouteMatch file components for this release are listed below.              ##
##                                                                                ##
#################################################################################### 
Component                                 RM Version   Last Modified
--------------------------------------------------------------------------
ArcGISRuntimeLogging.dll                               02/17/2015 16:56:12
ArcGISRuntimeLogging.dll                               02/17/2015 16:56:12
AxInterop.ActiveBar2Library.dll                        02/23/2012 11:59:59
AxInterop.BoWSmartUI.dll                               02/23/2012 11:59:59
AxInterop.GridEX20.dll                                 02/23/2012 11:59:59
AxInterop.MapObjects2.dll                              04/24/2015 13:04:58
AxInterop.R8AddressSelect.dll                          04/15/2016 08:32:13
AxInterop.R8DateTimePicker.dll                         09/19/2013 15:31:24
AxInterop.R8Map.dll                                    02/27/2015 08:17:35
AxInterop.R8MapAVL.dll                                 07/31/2014 12:22:11
AxInterop.R8MapControls.dll                            12/16/2015 09:26:50
AxInterop.R8SearchControl.dll                          02/20/2015 12:20:50
AxInterop.R8TreeCtrls.dll                              11/13/2014 10:19:40
CreateRouteMatchShortcuts.vbs                          08/12/2016 10:27:43
DemandTripInfo_template.html                           04/01/2016 15:05:39
ESRI.ArcGIS.Client.Behaviors.dll                       02/17/2015 09:31:22
ESRI.ArcGIS.Client.dll                                 02/17/2015 09:31:00
esrigps.dll                                            02/17/2015 16:56:12
esrigps.dll                                            02/17/2015 16:56:12
ExternalTripPage.html                                  04/01/2016 15:05:39
GOODBYE.wav                                            09/18/2008 07:24:24
Interop.ActiveBar2Library.dll                          02/23/2012 11:59:59
Interop.ADODB.dll                                      07/23/2012 10:12:40
Interop.AFCustom.dll                                   07/23/2012 10:12:40
Interop.BoWSmartUI.dll                                 02/23/2012 11:59:59
Interop.GridEX20.dll                                   02/23/2012 11:59:59
Interop.IasHelperLib.dll                               02/23/2012 11:59:59
Interop.IObjectSafetyTLB.dll                           02/23/2012 11:59:59
Interop.MapObjects2.dll                                07/23/2012 10:12:40
Interop.MSComctlLib.dll                                12/03/2014 10:25:26
Interop.MSXML2.dll                                     07/23/2012 10:12:40
Interop.R8AddressSelect.dll                            04/15/2016 08:32:13
Interop.R8BusCoord.dll                                 11/11/2013 16:16:55
Interop.R8CmpBase.dll                                  07/25/2012 11:52:15
Interop.R8CmpBase.dll                                  07/25/2012 11:52:15
Interop.R8DateTimePicker.dll                           09/19/2013 15:31:24
Interop.R8Debug.dll                                    12/17/2012 21:53:24
Interop.R8Debug.dll                                    12/17/2012 21:53:24
Interop.R8GenericEnv.dll                               06/05/2013 15:06:32
Interop.R8GenericEnv.dll                               06/05/2013 15:06:32
Interop.R8GEOLib.dll                                   08/26/2015 12:49:10
Interop.R8HostEnv.dll                                  07/25/2012 11:52:15
Interop.R8HostEnv.dll                                  07/25/2012 11:52:15
Interop.R8IData.dll                                    07/25/2012 11:52:15
Interop.R8Map.dll                                      02/27/2015 08:17:35
Interop.R8MapAVL.dll                                   07/31/2014 12:22:11
Interop.R8MapControls.dll                              12/16/2015 09:26:50
Interop.R8MapInterface.dll                             11/20/2013 15:39:39
Interop.R8MapSymbol.dll                                05/12/2014 13:03:03
Interop.R8PluginBase.dll                               07/25/2012 11:52:15
Interop.R8PSettings.dll                                10/17/2014 12:44:45
Interop.R8SearchControl.dll                            02/20/2015 12:20:50
Interop.R8TreeCtrls.dll                                11/13/2014 10:19:40
Interop.Scripting.dll                                  07/23/2012 10:12:40
Interop.VBA.dll                                        05/10/2016 13:52:21
Janus.Data.v4.dll                                      06/03/2016 15:40:00
Janus.Windows.ButtonBar.v2.dll                         02/23/2012 11:59:59
Janus.Windows.ButtonBar.v4.dll                         06/03/2016 15:40:00
Janus.Windows.CalendarCombo.v2.dll                     02/23/2012 11:59:59
Janus.Windows.CalendarCombo.v4.dll                     06/03/2016 15:40:00
Janus.Windows.Common.v2.dll                            02/23/2012 11:59:59
Janus.Windows.Common.v4.dll                            06/03/2016 15:40:00
Janus.Windows.ExplorerBar.v2.dll                       02/23/2012 11:59:59
Janus.Windows.ExplorerBar.v4.dll                       06/03/2016 15:40:00
Janus.Windows.FilterEditor.v4.dll                      06/03/2016 15:40:00
Janus.Windows.GridEX.v2.dll                            02/23/2012 11:59:59
Janus.Windows.GridEX.v4.dll                            06/03/2016 15:40:00
Janus.Windows.Ribbon.v4.dll                            06/03/2016 15:40:00
Janus.Windows.Schedule.v2.dll                          02/23/2012 11:59:59
Janus.Windows.Schedule.v4.dll                          06/03/2016 15:40:00
Janus.Windows.TimeLine.v2.dll                          02/23/2012 11:59:59
Janus.Windows.TimeLine.v4.dll                          06/03/2016 15:40:00
Janus.Windows.UI.v2.dll                                02/23/2012 11:59:59
Janus.Windows.UI.v4.dll                                06/03/2016 15:40:00
log4cxx.dll                                            02/17/2015 16:56:12
log4cxx.dll                                            02/17/2015 16:56:12
Logoff.wav                                             09/18/2008 07:24:24
MSComctlLib.dll                                        11/13/2014 10:19:40
msvcp120.dll                                           02/17/2015 16:56:12
msvcp120.dll                                           02/17/2015 16:56:12
msvcr120.dll                                           02/17/2015 16:56:12
msvcr120.dll                                           02/17/2015 16:56:12
neteng.dll                                             02/23/2012 11:59:59
Plugin.html                                            04/11/2016 10:03:15
Plugin.html                                            04/01/2016 15:05:39
R8.TS.RSE.ComAdapter.dll                  1.252        02/17/2016 13:41:54
R8.TS.Rse.Protocols.dll                   1.250        11/05/2015 22:38:57
R8Accessible.dll                          1.7          09/25/2014 14:04:50
R8Accessible.dll                          1.7          09/25/2014 14:04:50
R8AddressGeo.ocx                          1.450        12/21/2016 13:45:20
R8AddressSelect.ocx                       1.130        04/15/2016 08:32:13
R8AddressSelectForCSharp.dll              1.11         04/15/2016 08:32:13
R8AdHocCtl.dll                            1.48         09/19/2016 10:09:20
R8AdHocCtl.tlb                                         09/08/2016 17:31:10
R8AlertsUi.dll                            1.172        10/06/2015 15:11:51
R8AlertsUi.tlb                                         10/06/2015 15:11:51
R8AppGeoUtil.dll                          1.443        12/15/2016 13:15:56
R8AppMain.dll                             1.806        01/12/2017 10:01:49
R8AppMainDatabaseForCSharp.dll            1.309        04/19/2016 11:50:37
R8AppMainSystemForCSharp.dll              1.119        11/01/2016 18:18:08
R8AppMainSystemForCSharp.tlb                           11/01/2016 18:18:08
R8AppTemplateProcessor.dll                1.2          04/22/2016 15:36:39
R8AppTemplateProcessor.tlb                             03/30/2016 14:48:34
R8AppUtils.dll                            1.0          11/18/2015 12:28:13
R8AuditLog.dll                            1.20         01/04/2017 11:17:56
R8AuditLogCtrl.dll                        1.40         01/04/2017 11:17:56
R8AuditLogCtrl.tlb                                     01/04/2017 11:17:56
R8Availability.ocx                        1.305        04/27/2015 19:54:41
R8Bus.dll                                 1.701        12/27/2016 14:50:07
R8BusActualAnalyze.dll                    1.12         10/14/2015 15:40:17
R8BusActualAnalyze.tlb                                 10/14/2015 15:40:17
R8BusAddress.dll                          1.213        05/20/2016 09:04:19
R8BusAlerts.dll                           1.151        10/20/2016 15:54:54
R8BusAssetMaintenance.dll                 1.13         06/16/2016 08:05:31
R8BusAudioFile.dll                        1.6          08/28/2012 17:35:11
R8BusCA.dll                               1.3          09/11/2012 19:04:00
R8BusCoord.dll                            1.24         11/11/2013 16:16:55
R8BusCriteria.dll                         1.2          07/07/2014 20:26:28
R8BusCustomers.dll                        1.95         11/30/2015 19:05:40
R8BusDocument.dll                         1.10         10/28/2016 17:11:11
R8BusDocument.tlb                                      01/28/2016 15:51:56
R8BusDRActual.dll                         1.50         10/13/2016 17:40:30
R8BusFleetScheduling.dll                  1.27         11/30/2015 19:05:40
R8BusFxRt.dll                             1.105        11/20/2014 10:33:41
R8BusFxRt2.dll                            1.3          03/28/2016 10:55:27
R8BusIncidents2.dll                       1.31         01/06/2017 13:27:07
R8BusMessageBoard.dll                     1.3          07/19/2012 14:59:43
R8BusMesssageEditor.dll                   1.12         07/30/2014 17:37:46
R8BusNotifications.dll                    1.2          05/09/2016 08:54:16
R8BusResources.dll                        1.172        06/17/2016 11:45:43
R8BusRmGate.dll                           1.2          09/14/2012 12:38:03
R8BusRMLinkMsg.dll                        1.11         12/22/2016 10:33:54
R8BusRSE.dll                              1.68         12/23/2015 06:14:06
R8BusRSE.tlb                                           09/24/2015 11:11:40
R8BusSettings.dll                         1.3          11/10/2014 16:26:55
R8BusSettingsForCSharp.dll                1.51         06/28/2016 11:02:13
R8BusTrip.dll                             1.103        12/09/2013 06:52:00
R8BusUser.dll                             1.89         12/22/2016 10:33:54
R8BusVehicle.dll                          1.1          12/13/2016 14:30:50
R8BusVehicleInspection.dll                1.3          11/22/2013 16:43:13
R8BusVehInspecThreshold.dll               1.3          07/22/2014 18:15:23
R8BusVehMaintenance.dll                   1.4          06/08/2016 08:55:24
R8BusVerification.dll                     1.108        07/27/2016 14:51:21
R8BusWorkOrder.dll                        1.163        08/27/2015 12:36:00
R8BusZone.dll                             1.1          09/15/2015 08:44:53
R8BusZone2.dll                            1.6          11/04/2015 18:39:40
R8CAGUIControls.dll                       1.1300       01/10/2017 15:40:05
R8CAGUIControls.tlb                                    12/20/2016 09:59:14
R8CAInterfaces.dll                        1.888        01/05/2017 10:29:19
R8CapacitiesChart.dll                     1.0          08/30/2016 11:21:50
R8CapacitiesChart.tlb                                  08/23/2016 14:55:41
R8CARouteShoutNotificationsUI.dll         1.6          06/03/2016 15:40:00
R8CAVisualHeadways.dll                    1.52         01/05/2017 10:29:19
R8ChartControl.dll                        1.0          08/30/2016 11:04:34
R8ChatCtrl.dll                            1.50         12/20/2016 13:46:20
R8ChatCtrl.tlb                                         12/20/2016 13:46:20
R8ClusterAnalysis.dll                     1.0          11/18/2015 12:28:13
R8ClusterAnalysis.tlb                                  11/18/2015 12:28:13
R8CmpBase.dll                             1.0          04/03/2012 12:02:57
R8CmpBase.dll                             1.0          04/03/2012 12:02:57
R8CmpBase.dll                             1.0          04/03/2012 12:02:57
R8CmpBaseForCSharp.dll                    1.337        11/01/2016 18:18:08
R8CmpBaseForCSharp.dll                    1.337        11/01/2016 18:18:08
R8ColorPicker.dll                         1.3          01/19/2016 16:01:55
R8ColorPicker.tlb                                      01/19/2016 16:01:55
R8ComboOverride.ocx                       1.106        09/13/2013 10:11:34
R8CommonControls.dll                      1.5          05/10/2016 11:58:26
R8Containers.dll                          1.103        10/18/2013 08:07:23
R8Containers.dll                          1.103        10/18/2013 08:07:23
R8Coordination.dll                        1.1          04/11/2012 17:02:12
R8CSharpUtils.dll                         1.1          12/07/2015 10:58:41
R8CustomerMis.ocx                         1.119        02/23/2016 14:23:49
R8DataAccess.dll                          1.113        03/02/2016 08:31:33
R8DataAccessForCSharp.dll                 1.602        01/04/2017 11:17:56
R8DataItemsGrid.ocx                       1.106        09/08/2016 10:48:06
R8DateSpanTabControl.dll                  1.20         07/20/2015 11:13:00
R8DateTimeCtl.dll                         1.37         05/11/2016 11:06:49
R8DateTimeCtl.tlb                                      04/19/2016 14:59:28
R8DateTimePicker.ocx                      1.129        10/04/2013 13:39:31
R8DateTimePickerForCSharp.dll             1.7          10/20/2016 14:54:42
R8DBResolver.dll                          1.116        04/19/2016 11:50:37
R8Debug.dll                               1.5          02/03/2014 17:17:26
R8Debug.dll                               1.5          02/03/2014 17:17:26
R8Debug.dll                               1.5          02/03/2014 17:17:26
R8Debug2.dll                              1.109        11/16/2015 15:59:09
R8Debug2.dll                              1.109        11/16/2015 15:59:09
R8Debug2.dll                              1.109        11/16/2015 15:59:09
R8DebugForCSharp.dll                      1.104        04/17/2015 09:55:41
R8DebugForCSharp.dll                      1.104        04/17/2015 09:55:41
R8DemoPGI.dll                             1.1          07/10/2015 10:28:50
R8DemoPGI.tlb                                          07/10/2015 10:28:50
R8DisplayError.dll                        1.6          01/15/2013 11:57:21
R8DisplayError.dll                        1.6          01/15/2013 11:57:21
R8DisplayError.dll                        1.6          01/15/2013 11:57:21
R8DisplayError.tlb                                     10/29/2012 16:41:34
R8DisplayError.tlb                                     10/29/2012 16:41:34
R8DisplayError.tlb                                     10/29/2012 16:41:34
R8DocumentUi.dll                          1.19         01/06/2017 13:27:07
R8DynamicReporting.dll                    1.4          01/12/2017 11:44:02
R8DynamicReporting.tlb                                 12/09/2016 11:36:28
R8FavoriteAddresses.dll                   1.3          07/19/2012 14:59:43
R8FavoriteAddresses.tlb                                07/20/2015 11:13:00
R8FavoriteAddressUI.dll                   1.1          09/08/2016 15:47:44
R8FavoriteAddressUI.tlb                                09/08/2016 15:38:20
R8FavoriteTrips.dll                       1.27         03/24/2016 16:54:04
R8FavoriteTrips.tlb                                    03/24/2016 16:54:04
R8FleetComponentUi.dll                    1.54         02/04/2016 14:58:41
R8FleetComponentUi.tlb                                 02/04/2016 14:58:41
R8FleetUi.dll                             1.185        06/21/2016 15:10:27
R8FleetUi.tlb                                          06/17/2016 11:45:43
R8GateUi.dll                              1.4          09/21/2012 16:58:22
R8GateUi.tlb                                           08/17/2012 09:44:16
R8GenericEnv.dll                          1.120        12/18/2015 19:31:57
R8GenericEnv.dll                          1.120        12/18/2015 19:31:57
R8GenericEnv.dll                          1.120        12/18/2015 19:31:57
R8GenericEnvForCSharp.dll                 1.195        07/11/2016 12:34:44
R8GenericEnvForCSharp.tlb                              07/11/2016 12:34:44
R8Geo.dll                                 1.511        12/13/2016 12:49:15
R8Geo.dll                                 1.511        12/13/2016 12:49:15
R8Geo.dll                                 1.511        12/13/2016 12:49:15
R8GeoMapUI.dll                            1.28         06/01/2016 17:15:49
R8GeoMapUI.tlb                                         04/28/2016 18:37:43
R8GeoUtil.dll                             1.412        12/15/2016 13:15:56
R8GridControl.dll                         1.400        12/09/2016 18:00:02
R8HostEnv.dll                             1.0          04/04/2012 16:38:27
R8HostEnv.dll                             1.0          04/04/2012 16:38:27
R8HostEnv.dll                             1.0          04/04/2012 16:38:27
R8HostEnvForCSharp.dll                    1.112        11/01/2016 18:18:08
R8IData.dll                               1.0          04/05/2012 11:55:28
R8IPaymentGateway.dll                     1.1          07/10/2015 10:28:50
R8IPaymentGateway.tlb                                  07/10/2015 10:28:50
R8IRptFntEnd.dll                          1.1          11/13/2014 10:19:40
R8LinkForCSharp.dll                       1.361        12/22/2016 10:33:54
R8LinkForCSharp.tlb                                    12/22/2016 10:33:54
R8Load.exe                                1.113        09/07/2016 13:06:53
R8Load3G.exe                              1.113        09/07/2016 13:06:53
R8Load3G.exe.config                                    07/20/2016 16:11:27
R8LoadUtil.dll                            1.116        06/06/2016 15:21:30
R8LoadUtil.dll                            1.116        06/06/2016 15:21:30
R8ManualSched.dll                         1.132        09/01/2016 14:37:40
R8ManualSched.tlb                                      07/12/2016 16:27:54
R8Map.ocx                                 1.180        02/27/2015 08:17:35
R8MapAVL.ocx                              1.142        07/31/2014 12:22:11
R8MapAVL2.dll                             1.173        10/10/2014 08:46:52
R8MapAVL2.tlb                                          10/10/2014 08:46:52
R8MapAVL2_z.dll                           1.310        11/21/2016 11:33:18
R8MapAVL2_z.tlb                                        09/26/2016 12:28:14
R8MapControls.ocx                         1.241        04/18/2016 12:56:05
R8MapDataUtil.dll                         1.237        08/04/2016 12:44:03
R8MapInt.dll                              1.530        09/12/2016 17:03:21
R8MapInterface.dll                        1.102        11/20/2013 15:39:39
R8MapsCustom.dll                          1.15         01/10/2017 15:50:45
R8MapSvcsLyr.dll                          1.332        11/21/2016 16:32:37
R8MapSvcsLyr.tlb                                       08/11/2016 15:29:25
R8MapSymbol.dll                           1.204        04/07/2015 14:46:30
R8MdiControls.dll                         1.33         01/13/2016 14:08:58
R8MessageEditorCtl.dll                    1.17         03/22/2016 15:46:35
R8MessageEditorCtl.tlb                                 05/06/2014 11:38:33
R8MPArcEng.dll                            1.134        08/04/2016 15:32:43
R8MPArcGISWPF.dll                         1.266        05/11/2016 13:29:50
R8MsgGridCtrl.dll                         1.5          12/09/2016 16:07:24
R8MsgGridCtrl.tlb                                      12/09/2016 16:07:24
R8MsgGridCtrlEnhanced.dll                 1.6          01/10/2017 16:28:00
R8MsgGridCtrlEnhanced.tlb                              12/14/2016 11:41:12
R8MultiSelCombo.ocx                       1.101        02/05/2013 15:36:02
R8MultiSelectEditor.dll                   1.20         08/26/2015 14:27:47
R8NotificationUI.dll                      1.5          11/20/2014 15:28:51
R8ObjectPropertyEditor.dll                1.67         11/30/2015 19:05:40
R8ObjectSelection.dll                     1.3          08/23/2016 14:55:41
R8ObjectSelection.tlb                                  01/13/2016 14:08:58
R8ODBC.dll                                             04/06/2012 10:06:04
R8PAddresses.ocx                          1.104        03/23/2016 12:22:23
R8PAlerts.dll                             1.3          11/17/2014 13:49:00
R8PAlerts.tlb                                          09/16/2014 10:33:29
R8PAssetMaint.dll                         1.14         06/23/2016 13:36:39
R8PAssetMaint.tlb                                      06/16/2016 08:05:31
R8PAssets.dll                             1.19         06/16/2016 08:05:31
R8PAssets.tlb                                          06/16/2016 08:05:31
R8PAVLActivity.dll                        1.4          09/17/2014 17:15:37
R8PAVLActivity.tlb                                     09/17/2014 17:15:37
R8PAVLActivity_z.dll                      1.118        06/10/2016 10:10:36
R8PAVLActivity_z.tlb                                   06/10/2016 10:10:36
R8PAVLPlayback.ocx                        1.130        07/06/2016 13:47:43
R8PBilling.ocx                            1.4          09/29/2014 16:28:20
R8PCAAnalysis.dll                         1.19         09/20/2016 14:44:11
R8PCAAnalysis.tlb                                      03/19/2013 13:35:32
R8PCADispatching.dll                      1.322        12/22/2016 10:33:54
R8PCADispatching.tlb                                   12/22/2016 10:33:54
R8PCAMonitoring.dll                       1.15         05/01/2013 11:22:18
R8PCAMonitoring.tlb                                    02/07/2013 11:52:34
R8PCAScheduling.dll                       1.445        12/20/2016 11:47:45
R8PCAScheduling.tlb                                    12/20/2016 11:47:45
R8PCAUtilities.dll                        1.151        10/30/2013 11:25:12
R8PCAUtilities.tlb                                     10/30/2013 11:25:12
R8PCAVerification.dll                     1.126        06/16/2016 10:20:30
R8PCAVerification.tlb                                  09/10/2015 13:03:41
R8PCoordination.ocx                       1.25         09/28/2015 17:40:13
R8PCustFareServ.dll                       1.46         09/19/2016 16:47:29
R8PCustFareServ.tlb                                    08/02/2016 16:16:52
R8PCustomers.ocx                          1.312        01/09/2017 15:08:45
R8PDebugger.dll                           1.3          04/21/2016 08:04:10
R8PDebugger.tlb                                        12/17/2014 14:31:46
R8PDispatch.ocx                           1.662        01/12/2017 13:56:15
R8PDrivers.ocx                            1.223        12/09/2016 07:17:16
R8PFRAuthoring.dll                        1.213        09/30/2016 09:43:44
R8PFRAuthoring.tlb                                     08/11/2016 15:29:25
R8PFundSrc.ocx                            1.110        11/17/2014 15:42:25
R8PIncidents.ocx                          1.123        07/30/2015 15:11:38
R8PIncidents2.dll                         1.41         01/04/2017 11:17:56
R8PIncidents2.tlb                                      01/04/2017 11:17:56
R8PluginBase.dll                          1.0          04/05/2012 13:19:35
R8PluginBaseForCSharp.dll                 1.157        11/30/2015 19:05:40
R8PluginFrm.dll                           1.182        01/12/2017 12:51:37
R8PluginFrmForCSharp.dll                  1.28         05/10/2016 13:25:32
R8PluginFrmForCSharp_a.dll                1.5          07/23/2016 13:50:44
R8PluginFrmForCSharp_a.tlb                             07/23/2016 13:50:44
R8PMessageBoard.dll                       1.106        03/24/2016 16:54:04
R8PMessageBoard.tlb                                    03/24/2016 16:54:04
R8PNotifications.ocx                      1.121        05/11/2016 11:11:04
R8PPortal.ocx                             1.23         11/26/2014 15:11:17
R8PReporting.ocx                          1.115        09/15/2016 09:10:41
R8PSchedule.ocx                           1.505        01/11/2017 11:22:56
R8PServices.ocx                           1.232        06/14/2016 16:37:11
R8PSettings.ocx                           1.422        12/29/2016 14:45:14
R8PSettings2.dll                          1.55         11/03/2016 14:48:34
R8PSettings2.tlb                                       10/20/2016 12:29:56
R8PTrips.ocx                              1.603        12/12/2016 14:11:00
R8PVehicles.ocx                           1.233        12/28/2016 11:16:36
R8PVerification.ocx                       1.421        01/12/2017 11:56:30
R8PWebBrowser.dll                         1.1          04/11/2016 09:36:10
R8PWebBrowser.tlb                                      04/11/2016 09:36:10
R8PWOMgnt.dll                             1.20         11/30/2015 19:05:40
R8PWOMgnt.tlb                                          11/30/2015 19:05:40
R8PWorkOrders.dll                         1.90         05/01/2015 18:56:13
R8PWorkOrders.tlb                                      07/31/2013 23:50:14
R8PWOSched.dll                            1.97         05/20/2016 11:44:08
R8PWOSched.tlb                                         05/20/2016 11:29:05
R8QueryCombo.ocx                          1.1          08/08/2012 15:02:10
R8RecurrencePatternUi.dll                 1.7          08/27/2015 15:07:29
R8RegDotNetDll.exe                        1.1          07/17/2012 11:07:54
R8RegDotNetDll.exe                        1.1          07/17/2012 11:07:54
R8RegDotNetDll.exe                        1.1          07/17/2012 11:07:54
R8RegEx.dll                               1.4          08/04/2016 15:28:52
R8RegEx.tlb                                            06/27/2013 12:29:59
R8RegisteredEntities.dll                  1.0          04/05/2012 16:35:17
R8ReportInterface.dll                     1.3          09/08/2015 18:08:55
R8ReportInterface.dll                     1.3          09/08/2015 18:08:55
R8ReportServerAdapter.dll                 1.5          06/11/2015 15:33:51
R8ReportServerAdapter.dll                 1.5          06/11/2015 15:33:51
R8ReportServerAdapter.dll                 1.5          06/11/2015 15:33:51
R8ReportViewerCtl.dll                     1.34         03/24/2016 16:54:04
R8ReportViewerCtl.tlb                                  03/24/2016 16:54:04
R8RMXSProtocol.dll                        1.6          02/02/2016 17:36:26
R8RMXSProtocol.tlb                                     02/02/2016 17:36:26
R8RptDTRTripleSel.ocx                     1.16         02/13/2013 13:04:13
R8RptFECtl.dll                            1.1          03/24/2016 16:54:04
R8RptFECtl.tlb                                         03/24/2016 16:54:04
R8RptFEDateVar.ocx                        1.32         04/22/2015 08:21:29
R8RptFEDTRMultiSel.ocx                    1.33         10/17/2016 09:44:15
R8RptFEDTRSingSel.ocx                     1.71         09/13/2016 13:41:16
R8RptFEManifest.ocx                       1.32         08/31/2016 05:32:41
R8RptFEManifMulti.ocx                     1.8          09/15/2016 17:16:23
R8RptFEOTPDD.dll                          1.0          08/10/2016 15:05:51
R8RptFEOTPDD.tlb                                       08/10/2016 15:05:51
R8RptFERMDirdb.ocx                        1.44         07/29/2016 15:38:02
R8RptFntEnd.ocx                           1.8          04/18/2013 14:09:32
R8RptFntEndInvoice.ocx                    1.24         08/30/2016 13:55:46
R8RptFntEndOTP.ocx                        1.11         02/03/2016 09:24:39
R8RptFntEndUsers.ocx                      1.15         07/23/2013 14:50:55
R8RptMultAgy.ocx                          1.4          10/19/2012 16:07:39
R8Rse.dll                                              01/03/2017 11:13:50
R8Rse.dll                                              01/03/2017 11:13:50
R8Rse.dll                                              01/03/2017 11:13:50
R8RseMain.dll                                          07/11/2013 18:21:45
R8RSEServerAdapter.dll                    1.252        02/17/2016 13:41:54
R8RseServerClient.dll                                  09/12/2016 13:16:17
R8RseServerClient.dll                                  09/12/2016 13:16:17
R8RseServerClient.dll                                  09/12/2016 13:16:17
R8RSESettings.dll                         1.2          07/20/2012 11:18:51
R8RSESettings.tlb                                      07/20/2012 11:18:51
R8RunSummaryCtl.dll                       1.100        05/25/2016 15:27:03
R8RunSummaryCtl.tlb                                    05/17/2016 20:30:35
R8ScheduleForDay.ocx                      1.0          04/06/2012 17:32:26
R8SchedulingEngineUI.dll                  1.504        07/11/2016 16:59:14
R8SchedulingEngineUI.tlb                               05/10/2016 13:52:21
R8SearchControl.ocx                       1.220        03/17/2015 10:29:01
R8Security.dll                            1.39         11/07/2016 14:20:50
R8Security.tlb                                         11/01/2016 18:18:08
R8StdUi.dll                               1.154        12/03/2015 16:10:00
R8StdUi.dll                               1.154        12/03/2015 16:10:00
R8StdUIForCSharp.dll                      1.6          08/25/2015 15:24:54
R8Suspension.dll                          1.1          01/04/2013 12:07:57
R8TabControl.dll                          1.30         08/27/2015 16:19:43
R8TabControl.tlb                                       08/18/2014 16:09:20
R8TCPProtocol.dll                         1.20         12/28/2014 20:29:20
R8TemplateCtrls.dll                       1.3          03/23/2016 12:22:23
R8TemplateCtrls.tlb                                    03/11/2016 16:27:41
R8TemplateProcessorUi.dll                 1.11         09/29/2015 09:39:35
R8TemplateProcessorUi.tlb                              09/28/2015 17:40:13
R8TemplateProcessorUi_a.dll               1.12         10/25/2016 17:59:58
R8TemplateProcessorUi_a.tlb                            09/28/2015 17:40:13
R8Ticketing.dll                           1.106        07/27/2016 14:51:21
R8Ticketing.tlb                                        07/27/2016 14:51:21
R8Toolbar.dll                             1.114        04/21/2016 08:04:10
R8Toolbar.tlb                                          04/21/2016 08:04:10
R8TreeCtrls.ocx                           1.123        06/02/2016 11:52:06
R8TripPlanner.dll                         1.103        07/09/2013 15:25:40
R8TripPlanner.tlb                                      07/20/2015 11:13:00
R8TypeAheadComboBox.dll                   1.0          08/23/2016 12:13:47
R8TypeAheadComboBox.tlb                                08/23/2016 12:13:47
R8UserFields.dll                          1.108        07/26/2016 10:46:59
R8UserFields.tlb                                       03/09/2015 15:16:17
R8ValidateSched.dll                       1.27         09/26/2016 10:37:27
R8ValidateSched.tlb                                    09/25/2015 13:43:04
R8VBHooks.dll                             1.0          04/06/2012 17:07:22
R8VehicleInspectionUi.dll                 1.9          11/17/2014 12:00:31
R8VehicleInspectionUi.tlb                              11/17/2014 12:00:31
R8VehicleInspectionUi_a.dll               1.2          10/06/2014 07:30:14
R8VehicleInspectionUi_a.tlb                            10/06/2014 07:30:14
R8VehicleMaintenanceCtrl.dll              1.32         06/08/2016 08:55:24
R8VehicleMaintenanceCtrl.tlb                           06/08/2016 08:55:24
R8VehicleUi.dll                           1.12         12/28/2016 11:16:36
R8VehicleUi.tlb                                        12/13/2016 14:30:50
R8VehInspecThresholdUi.dll                1.4          07/22/2014 18:15:23
R8VehInspecThresholdUi.tlb                             07/22/2014 16:30:46
R8VersionInfo.dll                         1.1          10/23/2012 16:03:02
R8VersionInfo.dll                         1.1          10/23/2012 16:03:02
R8Warehouse.dll                           1.101        12/06/2013 14:55:38
R8WizardControl.dll                       1.6          11/19/2013 11:53:33
ReadMe.txt                                             01/05/2017 14:04:41
ReadMe_QS.txt                                          03/14/2016 13:27:54
REGTLIB.exe                                            09/18/2008 07:32:48
REGTLIB.exe                                            09/18/2008 07:32:48
Release_DR.rmc                                         04/11/2016 11:49:11
Release_DR.ver                                         01/12/2017 19:45:11
Release_FR.rmc                                         04/01/2016 12:54:52
Release_FR.ver                                         01/12/2017 19:45:11
Release_ML.rmc                                         04/01/2016 12:54:52
Release_ML.ver                                         01/12/2017 19:45:11
Release_TAM.rmc                                        04/01/2016 12:54:52
Release_TAM.ver                                        01/12/2017 19:45:11
Release_TAML.rmc                                       08/11/2016 09:42:02
Release_TAML.ver                                       01/12/2017 19:45:11
RMADDRESSGEO.HLP                                       09/06/2012 11:39:39
RMAVAILABILITY.HLP                                     09/06/2012 11:39:39
RMBridge32.dll                            1.37         01/07/2015 18:47:07
RMBridge32.dll                            1.37         01/07/2015 18:47:07
RMBridge32.dll                            1.37         01/07/2015 18:47:07
RMMAP.HLP                                              09/06/2012 11:39:39
RMPay_24x24.bmp                                        04/11/2016 11:47:35
RMPay_32x32.bmp                                        04/11/2016 11:47:35
RMQS.exe                                  4.252        02/17/2016 13:41:54
RMQS.ini                                               02/29/2016 11:09:07
RMQS.Protocols.dll                        4.100        02/23/2016 12:23:02
RMRelease.rmc                                          07/26/2016 14:12:43
RMRelease.ver                                          01/12/2017 19:45:11
RMRelease_QS.ver                                       01/12/2017 19:45:11
RMTemplateProcessor.dll                   1.2          05/14/2014 12:27:49
RMTemplateProcessor.dll                   1.2          05/14/2014 12:27:49
RMTemplateProcessor.tlb                                09/11/2013 09:39:17
RMTemplateProcessor.tlb                                09/11/2013 09:39:17
RMTemplateProcessor_a.dll                 1.5          01/13/2015 14:29:49
RMTemplateProcessor_a.dll                 1.5          01/13/2015 14:29:49
RMTemplateProcessorJavaBridge32.dll       1.0          11/05/2014 15:31:33
RMTemplateProcessorJavaBridge64.dll       1.0          11/05/2014 15:31:33
RMToolbarAndMenu.rmc                                   04/11/2016 09:36:10
RMToolbarAndMenu_NoDBC.rmc                             04/01/2016 12:54:52
RMTPCOMBrg.dll                            1.1          01/15/2015 10:48:49
RMTPCOMBrg.tlb                                         01/15/2015 10:48:49
RMVersionUtil.exe                                      08/05/2013 12:36:45
RMVersionUtil.exe                                      08/05/2013 12:36:45
RouteMatchHelp.chm                                     12/13/2013 12:01:48
RouteMatchRegTypicalCurrentUser.reg_txt                09/18/2008 07:24:26
RouteMatchRegTypicalLocalMachine.reg_txt               09/18/2008 07:24:26
RuntimeCoreNET.dll                                     02/17/2015 16:56:12
RuntimeCoreNET.dll                                     02/17/2015 16:56:12
stdole.dll                                             07/23/2012 10:12:40
System.Windows.Interactivity.dll                       02/17/2015 09:34:03
WebDemandTrips_24x24.bmp                               04/01/2016 15:05:39
WebDemandTrips_32x32.bmp                               04/01/2016 15:05:39



####################################################################################
##                                                                                ##
## Cases Fixed in Precut#15                                                       ##
##                                                                                ##
####################################################################################
--------------------------------------------------------------------------------------------------------------------------------
| JIRA#   | Summary                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------|
| DR-1621 | Changing Vehicle's OBD causes UpdateSchRouteColors error in Dispatch                                               |
| DR-1670 | Error when entering some 10 digit numbers in certification question answer (RELATED TO J#DR-1880)                  |
| DR-1684 | Message Center missing Create Accidents                                                                            |
| DR-1712 | DEVCASE: Improve RM Message Center positioning to support multiple monitors                                        |
| DR-1717 | The PU/DO icons on map should be different colors (PU - Grn, DO - Yellow)                                          |
| DR-1758 | Error message and R8Load3G remains running when not going to Message Center (intermittent)                         |
| DR-1778 | Saved Quick Reports gives error "Unable to cast object of type 'System.DBNull' to type 'System.Byte[]'             |
| DR-1780 | Message Center: Call record from a Talk Request Queued does not have same conversation number                      |
| DR-1819 | Event search: Vehicle ID does not appear at Emergencies, Operator Incidents, Service Issues results                |
| DR-1851 | Event Search with apostrophe gives an error and not return search results                                          |
| DR-1880 | CUSTOMERS > Unable to save number larger than 10 digits in Certification (RELATED TO J#1670)                       |
| DR-1898 | FORWARD_APPLY: EMC> Non-Voice User can Join Covert Alarm (SAME AS J#DR-1897)                                       |
| DR-426  | Pickup and Dropoff Icons in Scheduling Map Should be Different Shapes (DR#1717)                                    |
| DR-491  | RSE Rank Location (Fill Scheduling Gap) feature: problem setting ‘Max Additional Distance Trip Will Add To Route’  |
| DR-975  | Custom field values getting reset in Verification                                                                  |
| FR-626  | Wrong /No Message Sent from App to RMGate when FR work is assigned to a logged in device                           |
--------------------------------------------------------------------------------------------------------------------------------



####################################################################################
##                                                                                ##
## All cases fixed in RM#6.2.28                                                   ##
##                                                                                ##
####################################################################################
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| JIRA#   | Summary                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DR-1023 | Unable to create summary filters in the ad hoc wizard                                                                                                         |
| DR-1165 | Sort key in the optimization tuning parameters not working.                                                                                                   |
| DR-1393 | Implement solution for foot pedal integration                                                                                                                 |
| DR-1479 | DEVCASE: Map Options from Address Details form needs to reset on a date change (RELATED TO J#DR-60)                                                           |
| DR-1565 | RM#6.2.26 - AppGeoUtil will sometimes throw "memory access violation" error on Counties tab and/or Network tab                                                |
| DR-1621 | Changing Vehicle's OBD causes UpdateSchRouteColors error in Dispatch                                                                                          |
| DR-1633 | When using alternate county polygon (LGA for AU), State will not automatically associate when geocoding                                                       |
| DR-1634 | Correct existing TfNSW shapefiles with this problem                                                                                                           |
| DR-1635 | City does not autopopulate when geocoding due to TomTom format change in March 2016 Multinet data                                                             |
| DR-1649 | [FWD_APPLY] - Dropdown Selection when geocoding new address is populating incorrect information                                                               |
| DR-1670 | Error when entering some 10 digit numbers in certification question answer (RELATED TO J#DR-1880)                                                             |
| DR-1674 | Message Center does not have button text for Remote LogOn or LogOff tool tips when hovering over icons                                                        |
| DR-1675 | When geocoding new address using "Australia" map data (with LGAs), zipcode and city names are not populated                                                   |
| DR-1677 | FORWARD_APPLY: DEVCASE: Make RMChat to be more user friendly (SAME AS J#DR-1618)                                                                              |
| DR-1684 | Message Center missing Create Accidents                                                                                                                       |
| DR-1688 | FORWARD_APPLY: DEVCASE: Fix cosmetic issues on RMLink Message Center form (SAME AS J#DR-1646)                                                                 |
| DR-1689 | FORWARD_APPLY: DEVCASE: Improve check/selection handling from Device grid in RMChat control (SAME AS J#DR-1676)                                               |
| DR-1693 | FORWARD_APPLY: DEVCASE: Fix minor issues (disabling toolbar items and removing unnecessary spaces in Canned Message) from RM Chat control (SAME AS J#DR-1652) |
| DR-1701 | Quick Reports - Cannot Export a Report                                                                                                                        |
| DR-1710 | Receiving error when opening dispatch Updating Route Colors (SAME AS DR-1621)                                                                                 |
| DR-1712 | DEVCASE: Improve RM Message Center positioning to support multiple monitors                                                                                   |
| DR-1717 | The PU/DO icons on map should be different colors (PU - Grn, DO - Yellow)                                                                                     |
| DR-1725 | Switching from the Vehicle module to the Dispatching module should not give an error. (SAME AS DR-1621)                                                       |
| DR-1729 | FORWARD_APPLY: Message Center should be in Foreground (SAME AS J#DR-1663)                                                                                     |
| DR-1730 | FORWARD_APPLY: DEVCASE: Improve RM Message Center positioning when the form is launched from RM Dispatch (SAME AS J#DR-1692)                                  |
| DR-1758 | Error message and R8Load3G remains running when not going to Message Center (intermittent)                                                                    |
| DR-1770 | FWD_APPLY - Quick Report > Unable to export quick report in Cloud environment - receive error                                                                 |
| DR-1778 | Saved Quick Reports gives error "Unable to cast object of type 'System.DBNull' to type 'System.Byte[]'                                                        |
| DR-1780 | Message Center: Call record from a Talk Request Queued does not have same conversation number                                                                 |
| DR-1781 | FWD_APPLY - Message Center: Call choice is not present when right mouse click Queued call                                                                     |
| DR-1782 | FORWARD_APPLY: Msg Center: Row Count does not reset to 0 if change Message Start Time changed to return no messages (SAME AS J#DR-1655)                       |
| DR-1783 | FORWARD_APPLY: Hide Call button if Voice User is not checked (in Settings) (SAME AS J#DR-1700)                                                                |
| DR-1784 | FORWARD_APPLY: DEVCASE: Make RM Covert Alarm form to be noticeable (SAME AS J#DR-1713)                                                                        |
| DR-1785 | FORWARD_APPLY: DEVCASE: Add Voice ID when constructing a message on Covert Alarm operation (SAME AS J#DR-1734)                                                |
| DR-1786 | FORWARD_APPLY: DEVCASE: Add Voice ID when constructing a message on Covert Alarm operation (SAME AS J#DR-1734)                                                |
| DR-1787 | FORWARD_APPLY: Not showing Emergency Acknowledgement on Covert Alarm operation (SAME AS J#DR-1772)                                                            |
| DR-1806 | FWD_APPLY - PTT>'Call' in context menu does not honor Voice User setting                                                                                      |
| DR-1819 | Event search: Vehicle ID does not appear at Emergencies, Operator Incidents, Service Issues results                                                           |
| DR-1840 | FORWARD_APPLY: Covert Alarm should not honor message filtering for vehicle, driver, run (SAME AS J#DR-1826)                                                   |
| DR-1841 | FORWARD_APPLY: DEVCASE: Made RM Chat Control to honor RM Message Center vehicle filter (SAME AS J#DR-1827)                                                    |
| DR-1851 | Event Search with apostrophe gives an error and not return search results                                                                                     |
| DR-1865 | Windows 10 Multi Process mode doesn't work in 6.2.x versions                                                                                                  |
| DR-1880 | CUSTOMERS > Unable to save number larger than 10 digits in Certification (RELATED TO J#1670)                                                                  |
| DR-1898 | FORWARD_APPLY: EMC> Non-Voice User can Join Covert Alarm (SAME AS J#DR-1897)                                                                                  |
| DR-426  | Pickup and Dropoff Icons in Scheduling Map Should be Different Shapes (DR#1717)                                                                               |
| DR-491  | RSE Rank Location (Fill Scheduling Gap) feature: problem setting ‘Max Additional Distance Trip Will Add To Route’                                             |
| DR-72   | RouteMatch crash after open 4 of the biggest modules (Trips, Scheduling, Dispatching, and Verification) using windows 10                                      |
| DR-924  | Executing next day reminder call flow takes around 4 minutes to run or times out                                                                              |
| DR-975  | Custom field values getting reset in Verification                                                                                                             |
| FR-1022 | Settings > Users Form > Cannot Create New User Under Certain Agency Settings                                                                                  |
| FR-1030 | Update app to make calls to spFRMultipleTripInsert2                                                                                                           |
| FR-134  | Visual indicator/field in Dispatching to show when drivers are logged into a tablet                                                                           |
| FR-29   | The Summary View should display ETAs for deadheading vehicles                                                                                                 |
| FR-335  | FR Dispatching/Verification: Date-based values should default to the active date when modifying the time component                                            |
| FR-411  | Dispatch Summary - When bus is at layover, N/A value is displayed twice.                                                                                      |
| FR-419  | On Time Performance Indicators should only be displayed for current user's contractor                                                                         |
| FR-420  | Ad-hoc filter functions should be contractor-specific                                                                                                         |
| FR-457  | Add functionality to align a vehicle with a specific contractor                                                                                               |
| FR-458  | Parent ownership group users should be able to associate Master Routes with a specific ownership group                                                        |
| FR-459  | FR Scheduling should only display data for the current user's contractor                                                                                      |
| FR-460  | Contractor users should be able to change associated run data only                                                                                            |
| FR-462  | Contractor User should be able to un/schedule associated trips only                                                                                           |
| FR-464  | Add functionality to align a driver to a specific contractor                                                                                                  |
| FR-467  | Customer Service Module should be Contractor-specific                                                                                                         |
| FR-468  | FR Verification should only display data for the current user's contractor                                                                                    |
| FR-478  | FR Schedule/Cancel and expire options are active when trying to create new Run                                                                                |
| FR-586  | Ownership group users should only be able to see the drivers that are linked to their ownership group                                                         |
| FR-590  | Contractor users should NOT be able to edit vehicle information                                                                                               |
| FR-626  | Wrong /No Message Sent from App to RMGate when FR work is assigned to a logged in device                                                                      |
| FR-631  | Remote Log On/Off functions should be Contractor specific                                                                                                     |
| FR-634  | Posting> Require user to acknowledge that invalidated items were left unposted                                                                                |
| FR-655  | Authoring: App Should Prevent Assignment of Stop Target Scenario When It Results In Multiple Targets Performing Arrival/Departure                             |
| FR-735  | Swap Trips  > Better handle a "dirty" trip swap attempt                                                                                                       |
| FR-844  | Posting > "Object reference not set to instance of an object" runtime error when posting a full day                                                           |
| FR-856  | FR Authoring > Editing target radius via map resizing tool generates error                                                                                    |
| FR-869  | Certain Routes Not Appearing In AVL Playback                                                                                                                  |
| FR-884  | Parent-level user should be able to assign a run to an Ownership Group                                                                                        |
| FR-885  | App side development to allow parent-level user to be able to assign a run to an Ownership Group                                                              |
| FR-907  | FR Verification > Unable to use 24-hour time format when editing date-time fields                                                                             |
| FR-934  | No Fixed Route dependencies can exist before changing vehicle-to-contractor assigment                                                                         |
| FR-938  | Doc for FR-000                                                                                                                                                |
| FR-962  | Drivers > "R8PDrivers.ctlRMPDrivers.Load failed" runtime error when opening Drivers plugin                                                                    |
| FR-963  | Vehicles > "ctlRMPVehicles module (RefreshUserDefinedList)" runtime error thrown when opening Vehicles plugin                                                 |
| FR-964  | Addresses > "Unable to display the map control (ctlAddressGeo)" runtime error thrown when attempting to open Addresses plugin                                 |
| FR-967  | Authoring: When Copying Route Patterns To Not Include First Few Stops Copied Trips Have Invalid Times                                                         |
| FR-980  | FR Scheduling--Duplicate Parent contractor listed in Ownership Group dropdown list                                                                            |
| FR-982  | User acknowledgement form for invalidated trips pops up after displaying the posting successfull message when logging in to the App                           |
| FR-983  | Ownership Group combobox's default value should not be 'Option Not Selected'                                                                                  |
| FR-985  | Ownership Group field needs to be denoted with a required field(red triangle)                                                                                 |
| FR-986  | Receives an error when clicking on Active Tab of Visual Headway                                                                                               |
| FR-987  | Receives an error when deleting empty data view in VH                                                                                                         |
| FR-988  | New trip creation icon needs to be disabled for any Ownership Group                                                                                           |
| FR-990  | Ownership Group users are unable to create Runs                                                                                                               |
| FR-991  | Run Start Time is displayed as '#0.00' when logged in as Ownership user                                                                                       |
| FR-992  | FR Scheduling > Trips disappear from a Run when editing stop time and publishing/unpublishing trips                                                           |
| FR-997  | Return List of Failed Work in Acknowledgement Dialog                                                                                                          |
| FR-999  | App should reinterpolate trip stop order to start at 1 when copying a subroute                                                                                |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------



####################################################################################
##                                                                                ##
## Install Notes                                                                  ##
##                                                                                ##
####################################################################################

1) Create a "shortcut" on the desktop:
 
   Run the VBS script: CreateRouteMatchShortcuts.vbs

   a) Or, to "manually" create a shortcut for RM:
      Create a "shortcut" on the desktop using this string as the "target". 

      C:\RouteMatch\lib\pkg\cur\R8Load.exe /Program C:\RouteMatch\lib\pkg\cur\R8AppMain.dll 
      /AutoRegister C:\RouteMatch\lib\pkg\cur /ProgramArguments /VF(RMRelease.ver)
 
   b) Or, to "manually" create a shortcut for CA:
      Create a "shortcut" on the desktop using this string as the "target". 

      C:\RouteMatch\lib\pkg\cur\R8Load.exe /Program C:\RouteMatch\lib\pkg\cur\R8AppMain.dll 
      /AutoRegister C:\RouteMatch\lib\pkg\cur /ProgramArguments /VF(Release_CA.ver)
 
   c) Or, to "manually" create a shortcut for TS:
      Create a "shortcut" on the desktop using this string as the "target". 

      C:\RouteMatch\lib\pkg\cur\R8Load.exe /Program C:\RouteMatch\lib\pkg\cur\R8AppMain.dll 
      /AutoRegister C:\RouteMatch\lib\pkg\cur /ProgramArguments /VF(Release_TS.ver)
 
   d) Or, to "manually" create a shortcut for the GeoUtility Application:
      Create a "shortcut" on the desktop using this string as the "target". 

      C:\RouteMatch\lib\pkg\cur\R8Load.exe /Program C:\RouteMatch\lib\pkg\cur\R8AppGeoUtil.dll 
      /AutoRegister C:\RouteMatch\lib\pkg\cur

   e) Or, to "manually" create a shortcut for the RouteMatch Documentation:
      Create a "shortcut" on the desktop using this string as the "target". 

      C:\RouteMatch\lib\pkg\cur\Documentation


2) Install the Baseline Components (third-party software):

   Please refer to K#0337 INSTALL (RMTS#4.x, RMTS#5.x) Installing Baseline Components required by RouteMatch Software 
   (ThirdParty Software).

   DISCUSSION:
   When a particular version of RMTS#4.x or RMTS#5.x is released (e.g. 4.1.1, 5.0.1, 5.0.2, 5.1.0), 
   you normally just copy the RouteMatch components into a folder on the client's computer, and "run with /AutoRegister".  
   For RMCA#4.1.6+, the same process will be used.

   However, if the client has a new computer, or never had the RouteMatch software installed, 
   you will first need to install a set of "baseline components", or prerequisite software.  
   Once these baseline components have been installed, you should never need to re-install them 
   for the RMTS#4.x, RMTS#5.x, or RMCA#4.1.6+ software.


   SOLUTION:
   1. Installing Third Partly Software (in the following order):
   Run RMInstaller.exe on the client.  The file is located under the "ThirdPartyLibrary" folder 
   of the application being installed.  During the install, some 3rd party components, such as MSXML6, 
   may indicate they are already installed.  That is an expected part of the installation process.  
   Simply acknowledge this and continue.  The installer creates a log file RMinstaller.log, 
   and an uninstall.log file when uninstalled.


2. Registry Management:

   The "deliverables" folder for each RM product also contains the "RegistryManagement" sub-folder.
   (i.e. \\Rmfile02\Data\Routematch_Deliverables\4.x\RegistryManagement or \\Rmfile02\Data\Routematch_Deliverables\5.x\RegistryManagement)

   a. In the RegistryManagement folder, run the RegistryManagementUtility.exe (minimum version 1.4 Build 1) 
   to configure the computer's registry.  For more information, see knowledge base article 
   K#0197 (Subject: Copying Local Machine Registry Data from RM 3.0/3.1 Locations to 4.0+/5.0+ Locations or Creating New 4.0+/5.0+ Registry Locations).

   Windows 7 - 64 bit
   Please note, that when installing on a Windows 7 "64 bit" computer, the "Local Machine" registry info is stored under the "Wow6432Node" key:

      HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\RouteMatch

          However, "Current User" is not stored under the Wow6432Node key:

      HKEY_CURRENT_USER\Software\RouteMatch


3. Instructions for using the RM NetSolve Service (RMTS 5.x+ ONLY)

   You must have these Registry Keys:
   (These are already created and the values set, if you used the Registry Management Utility.)

      HKLM\S\R\Agencies\<AGENCY>\Profiles\<profile>\Settings\RSE\RSENetworkSolverMode (REG_DWORD)
      HKLM\S\R\Agencies\<AGENCY>\Profiles\<profile>\Settings\RSE\RSENetworkSolverServer (REG_SZ)
      HKLM\S\R\Agencies\<AGENCY>\Profiles\<profile>\Settings\RSE\RSENetworkSolverConnectionLevel (REG_SZ)
      HKLM\S\R\Services\RMNetSolve\RMNetSolveServerAgencyPath (REG_SZ)
      HKLM\S\R\Services\RMNetSolve\RMNetSolveServerMode (REG_DWORD)
      HKLM\S\R\Services\RMNetSolve\RMNetSolveWorkFolder (REG_SZ)

   Set values to:

      RSENetworkSolverMode = 0        
      RSENetworkSolverServer = localhost
      RSENetworkSolverConnectionLevel = 1
      RMNetSolveServerAgencyPath = {Path to client shapefile directory (above agency)}
      RMNetSolveServerMode = 0
      RMNetSolveWorkFolder = {Path to a work folder that can be used by NetSolve for temporary files}

   Please note: Setting RSENetworkSolverMode to 0 (above) turns this service OFF.  
   At some point, should you decide to change this setting to turn this service ON, 
   you would need to install and start/stop this service:

   To install and start the service: 

      RMNetSolveService3.exe -install
      net start RMNetSolveService3

   To stop and remove the service: 

      net stop RMNetSolveService3
      RMNetSolveService3.exe -remove


