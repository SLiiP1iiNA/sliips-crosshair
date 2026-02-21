local isCrosshairActive = false

Citizen.CreateThread(function()
    Citizen.Wait(1000)
    local savedData = GetResourceKvpString("sliips_crosshair_cfg")
    
    if savedData then
        local decoded = json.decode(savedData)
        if decoded and decoded.active then
            isCrosshairActive = true
        end
        SendNUIMessage({
            action = "initData",
            config = decoded
        })
    else
        SendNUIMessage({
            action = "initData",
            config = { active = false, variant = 1, size = 24, color = "#00ff00" }
        })
    end
end)

RegisterCommand('crosshair', function()
    SetNuiFocus(true, true)
    SendNUIMessage({ action = "openMenu" })
end, false)

RegisterNUICallback('saveAndClose', function(data, cb)
    SetNuiFocus(false, false)
    isCrosshairActive = data.active
    SetResourceKvp("sliips_crosshair_cfg", json.encode(data))
    cb('ok')
end)

Citizen.CreateThread(function()
    while true do
        local sleep = 500
        if isCrosshairActive then
            local ped = PlayerPedId()
            if IsPedArmed(ped, 4) and (IsControlPressed(0, 25) or IsPlayerFreeAiming(PlayerId())) then
                sleep = 0
                HideHudComponentThisFrame(14)
            end
        end
        Citizen.Wait(sleep)
    end
end)