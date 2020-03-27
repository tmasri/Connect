import { TestBed } from '@angular/core/testing';
import { DeviceIdentifierService } from './identify-device.service';

describe('DeviceIdentifierService', () => {

    let service: DeviceIdentifierService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                DeviceIdentifierService
            ]
        }).compileComponents();

        service = TestBed.get(DeviceIdentifierService);
    });

    it('should create service', () => {
        expect(service).toBeTruthy();
    });

    it('should return the identifier string', () => {
        const test = 'this is the identity';
        spyOn(service, 'getIdentity').and.returnValue(test);

        const identity = service.getIdentity();

        expect(identity).toEqual(test);
    });
});
