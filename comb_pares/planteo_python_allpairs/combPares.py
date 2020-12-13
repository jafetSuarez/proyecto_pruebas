lista = [
"Del bebe",
"De la ropa",
"De la familia",
"Femenino",
"Personal",
"Del cabello",
"Del hogar",
"Oral",
"De la salud",
"Personal y de la piel"
]
last = len(lista)-1
with open('pares.txt', 'w+') as f:
    for i in range(last):
        f.write('{}{}'.format(lista[i],'\t'))
    f.write('{}{}'.format(lista[last],'\n'))
    for i in range(last):
        f.write('S\t')
    f.write('S\n')
    for i in range(last):
        f.write('N\t')
    f.write('N\n')

def first():
    with open('w.txt', 'r+') as f:
        temp = lista
        cont = 0
        for i in range(10):
            f.write('check{}{}'.format(cont,'\t'))
            cont+=1
        f.write('seleccionado\n')
        while temp:
            for x in temp:
                f.write('{}\t'.format(x))
            calc = 10-len(temp)
            for i in range(calc):
                if calc > 0:
                    if calc == 1 and i == 0:
                        f.write('\tsi')
                    elif calc == 2 and i == 1:
                        f.write('\tno')
                    else:
                        f.write('\t')
            f.write('\n')
            temp.pop(0)

    f.closed    

def second():
    with open('pares.txt', 'w+') as f:
        temp = lista
        for i in range(9):
            f.write('{}{}'.format(lista[i],'\t'))
        f.write('{}{}'.format(lista[9],'\n'))
        for i in range(9):
            f.write('S\t')
        f.write('S\n')
        for i in range(9):
            f.write('N\t')
        f.write('N\n')

#second()