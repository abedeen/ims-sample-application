/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { TenantImsDetailComponent } from 'app/entities/tenant-ims/tenant-ims-detail.component';
import { TenantIms } from 'app/shared/model/tenant-ims.model';

describe('Component Tests', () => {
    describe('TenantIms Management Detail Component', () => {
        let comp: TenantImsDetailComponent;
        let fixture: ComponentFixture<TenantImsDetailComponent>;
        const route = ({ data: of({ tenant: new TenantIms(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [TenantImsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TenantImsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TenantImsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.tenant).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
