provider "azurem" {
    features {}
}

resource "azurm_resource_group" "vmrg" {
    name = var.rgname
    location = var.location
}
resource "random_id" "vm-sa" {
    keepers = {
        vm_hostname = var.vm_hostname
    }
    byte_length = 3
}

resource "azure_storage_account" "storage" {
    name = "bootdsk${lower(random_id.vm-sa.hex)}"
    resource_group_name = azurerm_resource_name
    location = azurerm_resource_location
    account_tier = element(split("_", var.account_tier), 0)
    account_replication_type = element(split("_", var.account_tier), 1)
    #tags = matchkeys(var.tags, "2")
    tags = var.tags
}

#