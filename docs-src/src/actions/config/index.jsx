import * as types from 'types/'

export const setJsonConfigSuccess = config => (
  {
    type: types.SET_JSON_CONFIG,
    config,
  }
)

export const setJsonConfig = config => (
  dispatch => (
    dispatch(setJsonConfigSuccess(config))
  )
)

export const setPythonConfigSuccess = config => (
  {
    type: types.SET_PYTHON_CONFIG,
    config,
  }
)

export const setPythonConfig = config => (
  (dispatch) => {
    const configTemp = Object.keys(config).reduce((configTemp, key) => {
      const temp = configTemp
      switch (config[key]) {
        case true:
          temp[key] = 'True'
          break
        case false:
          temp[key] = 'False'
          break
        case null:
          temp[key] = ''
          break
        default:
          temp[key] = config[key]
      }
      return temp
    }, {})
    const scheduledSleepSleepStartTime = config.scheduledSleepSleepStartTime ?
      `${String(config.scheduledSleepSleepStartTime.getHours()).padStart(2, '0')}` +
      `${String(config.scheduledSleepSleepStartTime.getMinutes()).padStart(2, '0')}` :
      ''
    const scheduledSleepExpeditionSleepStartTime = config.scheduledSleepExpeditionSleepStartTime ?
      `${String(config.scheduledSleepExpeditionSleepStartTime.getHours()).padStart(2, '0')}` +
      `${String(config.scheduledSleepExpeditionSleepStartTime.getMinutes()).padStart(2, '0')}` :
      ''
    const scheduledSleepCombatSleepStartTime = config.scheduledSleepCombatSleepStartTime ?
      `${String(config.scheduledSleepCombatSleepStartTime.getHours()).padStart(2, '0')}` +
      `${String(config.scheduledSleepCombatSleepStartTime.getMinutes()).padStart(2, '0')}` :
      ''
    const combatRepairTimeLimit = config.combatRepairTimeLimit ?
      `${String(config.combatRepairTimeLimit.getHours()).padStart(2, '0')}` +
      `${String(config.combatRepairTimeLimit.getMinutes()).padStart(2, '0')}` :
      ''
    const combatLBASGroup1Nodes = configTemp.combatLBASGroup1Node1 && configTemp.combatLBASGroup1Node2 ?
      `${configTemp.combatLBASGroup1Node1},${configTemp.combatLBASGroup1Node2}` :
      ''
    const combatLBASGroup2Nodes = configTemp.combatLBASGroup2Node1 && configTemp.combatLBASGroup2Node2 ?
      `${configTemp.combatLBASGroup2Node1},${configTemp.combatLBASGroup2Node2}` :
      ''
    const combatLBASGroup3Nodes = configTemp.combatLBASGroup3Node1 && configTemp.combatLBASGroup3Node2 ?
      `${configTemp.combatLBASGroup3Node1},${configTemp.combatLBASGroup3Node2}` :
      ''

    const combatOptions = []
    if (config.combatOptionCheckFatigue) {
      combatOptions.push('CheckFatigue')
    }
    if (config.combatOptionReserveDocks) {
      combatOptions.push('ReserveDocks')
    }
    if (config.combatOptionPortCheck) {
      combatOptions.push('PortCheck')
    }
    if (config.combatOptionClearStop) {
      combatOptions.push('ClearStop')
    }
    if (!configTemp.shipSwitcherSlot1Criteria || !configTemp.shipSwitcherSlot1Ships) {
      configTemp.shipSwitcherSlot1Criteria = ''
      configTemp.shipSwitcherSlot1Ships = ''
    }
    if (!configTemp.shipSwitcherSlot2Criteria || !configTemp.shipSwitcherSlot2Ships) {
      configTemp.shipSwitcherSlot2Criteria = ''
      configTemp.shipSwitcherSlot2Ships = ''
    }
    if (!configTemp.shipSwitcherSlot3Criteria || !configTemp.shipSwitcherSlot3Ships) {
      configTemp.shipSwitcherSlot3Criteria = ''
      configTemp.shipSwitcherSlot3Ships = ''
    }
    if (!configTemp.shipSwitcherSlot4Criteria || !configTemp.shipSwitcherSlot4Ships) {
      configTemp.shipSwitcherSlot4Criteria = ''
      configTemp.shipSwitcherSlot4Ships = ''
    }
    if (!configTemp.shipSwitcherSlot5Criteria || !configTemp.shipSwitcherSlot5Ships) {
      configTemp.shipSwitcherSlot5Criteria = ''
      configTemp.shipSwitcherSlot5Ships = ''
    }
    if (!configTemp.shipSwitcherSlot6Criteria || !configTemp.shipSwitcherSlot6Ships) {
      configTemp.shipSwitcherSlot6Criteria = ''
      configTemp.shipSwitcherSlot6Ships = ''
    }

    const pythonConfig = [
      '[General]',
      `Program: ${configTemp.generalProgram}`,
      `JSTOffset: ${configTemp.generalJSTOffset}`,
      `Pause: ${configTemp.generalPause}`,
      '',
      '[ScheduledSleep]',
      `SleepEnabled: ${configTemp.scheduledSleepSleepEnabled}`,
      `SleepStartTime: ${scheduledSleepSleepStartTime}`,
      `SleepLength: ${configTemp.scheduledSleepSleepLength}`,
      `ExpeditionSleepEnabled: ${configTemp.scheduledSleepExpeditionSleepEnabled}`,
      `ExpeditionSleepStartTime: ${scheduledSleepExpeditionSleepStartTime}`,
      `ExpeditionSleepLength: ${configTemp.scheduledSleepExpeditionSleepLength}`,
      `CombatSleepEnabled: ${configTemp.scheduledSleepCombatSleepEnabled}`,
      `CombatSleepStartTime: ${scheduledSleepCombatSleepStartTime}`,
      `CombatSleepLength: ${configTemp.scheduledSleepCombatSleepLength}`,
      '',
      '[Expeditions]',
      `Enabled: ${configTemp.expeditionsEnabled}`,
      `Fleet2: ${configTemp.expeditionsFleet2}`,
      `Fleet3: ${configTemp.expeditionsFleet3}`,
      `Fleet4: ${configTemp.expeditionsFleet4}`,
      '',
      '[PvP]',
      `Enabled: ${configTemp.pvpEnabled}`,
      '',
      '[Combat]',
      `Enabled: ${configTemp.combatEnabled}`,
      `Engine: ${configTemp.combatEngine}`,
      `Map: ${configTemp.combatMap}`,
      `FleetMode: ${configTemp.combatFleetMode}`,
      `CombatNodes: ${configTemp.combatCombatNodes}`,
      `NodeSelects: ${configTemp.combatNodeSelects}`,
      `Formations: ${configTemp.combatFormations}`,
      `NightBattles: ${configTemp.combatNightBattles}`,
      `RetreatLimit: ${configTemp.combatRetreatLimit}`,
      `RepairLimit: ${configTemp.combatRepairLimit}`,
      `RepairTimeLimit: ${combatRepairTimeLimit}`,
      `LBASGroups: ${configTemp.combatLBASGroups}`,
      `LBASGroup1Nodes: ${combatLBASGroup1Nodes}`,
      `LBASGroup2Nodes: ${combatLBASGroup2Nodes}`,
      `LBASGroup3Nodes: ${combatLBASGroup3Nodes}`,
      `ForceRetreatNodes: ${configTemp.combatForceRetreatNodes}`,
      `MiscOptions: ${combatOptions.join(',')}`,
      '',
      '[ShipSwitcher]',
      `Enabled: ${configTemp.shipSwitcherEnabled}`,
      `Slot1Criteria: ${configTemp.shipSwitcherSlot1Criteria}`,
      `Slot1Ships: ${configTemp.shipSwitcherSlot1Ships}`,
      `Slot2Criteria: ${configTemp.shipSwitcherSlot2Criteria}`,
      `Slot2Ships: ${configTemp.shipSwitcherSlot2Ships}`,
      `Slot3Criteria: ${configTemp.shipSwitcherSlot3Criteria}`,
      `Slot3Ships: ${configTemp.shipSwitcherSlot3Ships}`,
      `Slot4Criteria: ${configTemp.shipSwitcherSlot4Criteria}`,
      `Slot4Ships: ${configTemp.shipSwitcherSlot4Ships}`,
      `Slot5Criteria: ${configTemp.shipSwitcherSlot5Criteria}`,
      `Slot5Ships: ${configTemp.shipSwitcherSlot5Ships}`,
      `Slot6Criteria: ${configTemp.shipSwitcherSlot6Criteria}`,
      `Slot6Ships: ${configTemp.shipSwitcherSlot6Ships}`,
      '',
      '[Quests]',
      `Enabled: ${configTemp.questsEnabled}`,
    ]
    return dispatch(setPythonConfigSuccess(pythonConfig))
  }
)
