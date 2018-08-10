class DbMapper {
    static mapSound(sound) {
        return {
            id: sound.Id,
            name: sound.Name,
            byteArrayId: sound.ByteArrayId,
            type: {
                id: sound.SoundTypeId,
                name: sound.TypeName
            }
        }
    }

    static mapType(type) {
        return {
            id: type.Id,
            name: type.Name
        }
    }
}

module.exports = DbMapper;